package main

import (
	. "net/http"
	"libs/github.com/gorilla/mux"
	. "controller"
	"log"
	"config"
	"libs/github.com/rs/cors"
	"dao"
)

func configureHttpMethods(router *mux.Router) {
	router.HandleFunc("/", GetAboutPage).Methods("GET")
	router.HandleFunc("/clients/{id}", GetClientById).Methods("GET")
	router.HandleFunc("/clients", GetAllClients).Methods("GET")
	router.HandleFunc("/clients", AddNewClient).Methods("POST")
	router.HandleFunc("/clients/{id}/delete", DeleteClient).Methods("POST")
	router.HandleFunc("/clients/{id}", EditClient).Methods("POST")
}

func createConfiguredRouter() (*mux.Router) {
	router := mux.NewRouter()
	configureHttpMethods(router)
	return router
}

func main() {
	dao.UpdateCollectionConstraints(config.DATABASE_SERVER, config.DATABASE_NAME)
	handler := cors.Default().Handler(createConfiguredRouter())
	log.Printf("Server starting at %s...", config.SERVER_PORT)
	if err := ListenAndServe(config.SERVER_PORT, handler); err != nil {
		log.Fatal(err)
	}
}
