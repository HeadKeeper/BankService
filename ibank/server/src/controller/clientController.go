package controller

import (
	. "net/http"
	. "service"
	"libs/github.com/gorilla/mux"
	"encoding/json"
	"model"
	"log"
	"libs/gopkg.in/mgo.v2/bson"
	"web"
)

var service = CreateClientService()

func respondWithError(writer ResponseWriter, code int, message string) {
	log.Println(message)
	Error(writer, message, code)
}

func respondWithJson(writer ResponseWriter, code int, client model.Client) {
	writer.Header().Set("Content-Type", "application/json")
	clientJSON, _ := json.Marshal(client)
	writer.Write(clientJSON)
}

func respondArrayWithJson(writer ResponseWriter, code int, client []model.Client) {
	writer.Header().Set("Content-Type", "application/json")
	clientJSON, _ := json.Marshal(client)
	writer.Write(clientJSON)
}

func GetClientById(writer ResponseWriter, request *Request) {
	params := mux.Vars(request)
	id := params["id"]
	client, err := service.Find(id)
	log.Printf("Getting client with ID = %s", client.ID)
	if err != nil {
		respondWithError(writer, StatusBadRequest, "Invalid Client ID")
		return
	}
	respondWithJson(writer, StatusOK, client)
}

func AddNewClient(writer ResponseWriter, request *Request) {
	defer request.Body.Close()
	var client model.Client
	if err := json.NewDecoder(request.Body).Decode(&client); err != nil {
		respondWithError(writer, StatusBadRequest, "Invalid request payload")
		return
	}
	log.Printf("Adding new user %s %s", client.Name, client.Surname)
	client.ID = bson.NewObjectId()
	if err := service.Save(client); err != nil {
		respondWithError(writer, StatusInternalServerError, err.Error())
		return
	}
	respondWithJson(writer, StatusCreated, client)
}

func DeleteClient(writer ResponseWriter, request *Request) {
	defer request.Body.Close()
	params := mux.Vars(request)
	id := params["id"]
	if err := service.DeleteById(id); err != nil {
		respondWithError(writer, StatusInternalServerError, err.Error())
		return
	}
	log.Printf("Deleting client with ID = ", id)
}

func EditClient(writer ResponseWriter, request *Request) {
	defer request.Body.Close()
	params := mux.Vars(request)
	id := params["id"]
	var client model.Client
	if err := json.NewDecoder(request.Body).Decode(&client); err != nil {
		respondWithError(writer, StatusBadRequest, "Invalid request payload")
		return
	}
	if err := service.UpdateClientById(id, client); err != nil {
		respondWithError(writer, StatusInternalServerError, err.Error())
		return
	}
	log.Printf("Updating client data with ID = ", id)
}

func GetAllClients(writer ResponseWriter, request *Request) {
	clients, err := service.FindAll()
	log.Printf("Getting all clients")
	if err != nil {
		respondWithError(writer, StatusBadRequest, "Invalid Client ID")
		return
	}
	respondArrayWithJson(writer, StatusOK, clients)
}

func GetClientForm(writer ResponseWriter, request *Request) {
	clientPage,error := web.GetHtml("client")
	if error != nil {
		respondWithError(writer, StatusNotFound, "Page not found")
	}
	log.Println(request.Header)
	writer.Write([]byte(clientPage))
}
