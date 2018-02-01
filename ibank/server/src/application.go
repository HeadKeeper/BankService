package main

import (
	"libs/github.com/gorilla/mux"
	. "net/http"

	"log"

	. "controller"
	"config"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", GetAboutPage).Methods("GET")
	router.HandleFunc("/client/{id}", GetClientById).Methods("GET")
	router.HandleFunc("/clients", GetAllClients).Methods("GET")
	router.HandleFunc("/client", AddNewClient).Methods("POST")
	router.HandleFunc("/client/{id}", DeleteClient).Methods("DELETE")
	router.HandleFunc("/client/{id}", EditClient).Methods("PUT")

	log.Printf("Server starting at %s...", config.SERVER_PORT)
	if err := ListenAndServe(config.SERVER_PORT, router); err != nil {
		log.Fatal(err)
	}
}
