package dao

import (
	"libs/gopkg.in/mgo.v2/bson"
	"libs/gopkg.in/mgo.v2"

	. "model"
	"config"
)

const COLLECTION_NAME = "clients"

type ClientDAO struct {
	collection *mgo.Collection
}

func CreateClientDAO() ClientDAO {
	var database = ConnectToDatabase(config.DATABASE_SERVER, config.DATABASE_NAME)
	return ClientDAO {
		collection: database.C(COLLECTION_NAME),
	}
}

func (dao *ClientDAO) FindAll() ([]Client, error) {
	var clients []Client
	err := dao.collection.Find(bson.M{}).All(&clients)
	return clients, err
}

func (dao *ClientDAO) FindById(id string) (Client, error) {
	var client Client
	err := dao.collection.FindId(bson.ObjectIdHex(id)).One(&client)
	return client, err
}

func (dao *ClientDAO) Insert(client Client) error {
	err := dao.collection.Insert(&client)
	return err
}

func (dao *ClientDAO) Delete(client Client) error {
	err := dao.collection.Remove(&client)
	return err
}

func (dao *ClientDAO) Update(client Client) error {
	err := dao.collection.UpdateId(client.ID, &client)
	return err
}