package controller

import (
	. "net/http"
	"log"
)

func GetAboutPage(writer ResponseWriter, request *Request) {
	hello := "IDI TI NAHUI, CHORT EBANI"
	log.Println(request.Header)
	writer.Write([]byte(hello))
}
