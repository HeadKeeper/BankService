package service

import (
	. "model"
	"errors"
	"dao"
	"libs/gopkg.in/mgo.v2/bson"
)


type ClientService struct {
	dao dao.ClientDAO
}

func CreateClientService() ClientService {
	return ClientService{dao: dao.CreateClientDAO()}
}

func (service *ClientService) Save(client Client) error {
	if client.IsValid() {
		return service.dao.Insert(client)
	} else {
		return errors.New("Invalid client data")
	}
}

func (service *ClientService) Find(id string) (Client, error) {
	if len(id) <= 0 {
		return Client{}, errors.New("invalid id")
	}

	return service.dao.FindById(id)
}

func (service *ClientService) FindAll() ([]Client, error) {
	return service.dao.FindAll()
}

func (service *ClientService) Delete(client Client) error {
	if client.IsValid() {
		return service.dao.Delete(client)
	} else {
		return errors.New("Invalid client data")
	}
}

func (service *ClientService) DeleteById(id string) error {
	if len(id) <= 0 {
		return errors.New("invalid id")
	}
	client, err := service.Find(id)
	if err != nil {
		return err
	}

	return service.dao.Delete(client)
}

func (service *ClientService) UpdateClientById(id string, newData Client) (error) {
	if len(id) <= 0 {
		return errors.New("invalid id")
	}
	if newData.IsValid() {
		newData.ID = bson.ObjectIdHex(id)
		return service.dao.Update(newData)
	} else {
		return errors.New("Invalid client data")
	}
}

func isEmpty(string string) bool {
	return len(string) <= 0
}