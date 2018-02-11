package main

import (
	. "net/http"
	"libs/github.com/gorilla/mux"
	"libs/github.com/rs/cors"

	"config"
	. "controller"

	"log"
)

const PUBLIC_SCRIPTS_PATH = "./ibank/server/resources/public/script/"
//const PUBLIC_SCRIPTS_PATH = "./resources/public/script/"

func configureHttpMethods(router *mux.Router) {
	router.HandleFunc("/", GetAboutPage).Methods("GET")
	router.HandleFunc("/clients/{id}", GetClientById).Methods("GET")
	router.HandleFunc("/clients", GetAllClients).Methods("GET")
	router.HandleFunc("/client", AddNewClient).Methods("POST")
	router.HandleFunc("/clients/{id}", DeleteClient).Methods("DELETE")
	router.HandleFunc("/clients/{id}", EditClient).Methods("PUT")
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
	handler := cors.Default().Handler(createConfiguredRouter())
	log.Printf("Server starting at %s...", config.SERVER_PORT)
	if err := ListenAndServe(config.SERVER_PORT, handler); err != nil {
		log.Fatal(err)
	}
}
