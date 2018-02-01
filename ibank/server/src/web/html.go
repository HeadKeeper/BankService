package web

import (
	"io/ioutil"
	"fmt"
	"log"
)

const FILE_SERVER_PATH  = "./ibank/server/resources/public/%s.html"
const EMPTY_PAGE = ""

func GetHtml(pageName string) (string, error) {
	b, err := ioutil.ReadFile(fmt.Sprintf(FILE_SERVER_PATH, pageName)) // just pass the file name
	if err != nil {
		return EMPTY_PAGE, err
	}
	log.Printf("GET %s.html page", pageName)
	return string(b), nil
}
