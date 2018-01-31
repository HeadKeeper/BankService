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
	err := checkClient(client)
	if err != nil {
		return err
	}

	return service.dao.Insert(client)
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
	err := checkClient(client)
	if err != nil {
		return err
	}

	return service.dao.Delete(client)
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
	newData.ID = bson.ObjectIdHex(id)
	return service.dao.Update(newData)
}

func checkClient(client Client) error {
	hasErrors := false

	if isEmpty(client.Name) {
		hasErrors = true
	}

	if isEmpty(client.Surname) {
		hasErrors = true
	}

	if isEmpty(client.RegisterCity) {
		hasErrors = true
	}

	if isEmpty(client.RegisterAddress) {
		hasErrors = true
	}

	if isEmpty(client.PhoneMobile) {
		hasErrors = true
	}

	if isEmpty(client.PhoneHome) {
		hasErrors = true
	}

	if isEmpty(client.Patronymic) {
		hasErrors = true
	}

	if isEmpty(client.PassportSeries) {
		hasErrors = true
	}

	if isEmpty(client.PassportNumber) {
		hasErrors = true
	}

	if isEmpty(client.PassportIdentityNumber) {
		hasErrors = true
	}

	if isEmpty(client.PassportGiver) {
		hasErrors = true
	}

	if isEmpty(client.Nationality) {
		hasErrors = true
	}

	if isEmpty(client.MartialStatus) {
		hasErrors = true
	}

	if isEmpty(client.LivingCity) {
		hasErrors = true
	}

	if isEmpty(client.LivingAddress) {
		hasErrors = true
	}

	if isEmpty(client.RegisterCity) {
		hasErrors = true
	}

	if isEmpty(client.RegisterAddress) {
		hasErrors = true
	}

	if hasErrors {
		return errors.New("client object has invalid fields")
	} else {
		return nil
	}
}

func isEmpty(string string) bool {
	return len(string) <= 0
}