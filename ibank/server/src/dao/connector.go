package dao

import (
	"log"

	"libs/gopkg.in/mgo.v2"
)

func ConnectToDatabase(server string, database string) *mgo.Database {
	session, err := mgo.DialWithInfo(&mgo.DialInfo{
		Addrs: []string{server},
		Database: database,
	})
	if err != nil {
		log.Fatal(err)
	}

	db := session.DB(database)

	return db
}
