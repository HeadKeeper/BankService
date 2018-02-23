package dao

import (
	"log"
	"libs/gopkg.in/mgo.v2"
)

func UpdateCollectionConstraints(server, database string) (error) {
	session, err := mgo.DialWithInfo(&mgo.DialInfo{
		Addrs: []string{server},
		Database: database,
	})
	defer session.Close()
	if err != nil {
		return err
		log.Fatal(err)
	}

	db := session.DB(database)
	index := mgo.Index{
		Key:        []string{"passportIdentityNumber"},
		Unique:     true,
	}
	db.C("clients").EnsureIndex(index)
	return nil
}

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
