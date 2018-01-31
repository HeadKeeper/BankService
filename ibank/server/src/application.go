package main

import (
	"libs/github.com/gorilla/mux"
	. "controller"
	. "net/http"
	"log"
)

const SERVER_ADDR = ":3000"

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/", GetAboutPage).Methods("GET")
	router.HandleFunc("/client/{id}", GetClientById).Methods("GET")
	router.HandleFunc("/clients", GetAllClients).Methods("GET")
	router.HandleFunc("/client", AddNewClient).Methods("POST")
	router.HandleFunc("/client/{id}", DeleteClient).Methods("DELETE")
	router.HandleFunc("/client/{id}", EditClient).Methods("PUT")

	log.Printf("Server starting at %s...", SERVER_ADDR)
	if err := ListenAndServe(SERVER_ADDR, router); err != nil {
		log.Fatal(err)
	}
}
