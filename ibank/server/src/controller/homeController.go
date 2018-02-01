package controller

import (
	. "net/http"
	"log"
)

func GetAboutPage(writer ResponseWriter, request *Request) {
	hello := "IDI TI NAHUI, CHORT EBANI \xF0\x9F\x98\x82"
	log.Println(request.Header)
	writer.Write([]byte(hello))
}
