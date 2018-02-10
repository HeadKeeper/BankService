package main

import (
	. "net/http"
	"log"
	"config"
	"libs/github.com/gorilla/mux"
	. "controller"
)

const PUBLIC_SCRIPTS_PATH = "./ibank/server/resources/public/script/"
//const PUBLIC_SCRIPTS_PATH = "./resources/public/script/"

func configureHttpMethods(router *mux.Router) {
	router.HandleFunc("/", GetAboutPage).Methods("GET")
	router.HandleFunc("/client/add", GetClientForm).Methods("GET")
	router.HandleFunc("/client/{id}", GetClientById).Methods("GET")
	router.HandleFunc("/clients", GetAllClients).Methods("GET")
	router.HandleFunc("/client", AddNewClient).Methods("POST")
	router.HandleFunc("/client/{id}", DeleteClient).Methods("DELETE")
	router.HandleFunc("/client/{id}", EditClient).Methods("PUT")
}

func configureResourcesPaths(router *mux.Router) {
	router.PathPrefix("/resources/").Handler(
		StripPrefix("/resources/", FileServer(Dir(PUBLIC_SCRIPTS_PATH))),
	)
}

func createConfiguredRouter() (*mux.Router) {
	router := mux.NewRouter()
	configureResourcesPaths(router)
	configureHttpMethods(router)
	return router
}

func main() {
	router := createConfiguredRouter()
	log.Printf("Server starting at %s...", config.SERVER_PORT)
	if err := ListenAndServe(config.SERVER_PORT, router); err != nil {
		log.Fatal(err)
	}
}
