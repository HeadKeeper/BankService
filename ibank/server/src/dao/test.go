package dao

import (
	"model"
	"time"
	"fmt"
	_ "config"
)

func testCreateClient()  {
	//var configuration = config.Read()

	//var database = ConnectToDatabase(configuration.Server, configuration.Database)
	var clientDAO = CreateClientDAO()

	err := clientDAO.Insert(model.Client{
		Name:                   "Test",
		Army:                   true,
		Birthday:               time.Now(),
		BirthPlace:             "Minsk",
		Disability:             "None",
		Email:                  "test@email.com",
		Gender:                 "Male",
		JobAddress:             "Test address",
		JobPosition:            "Developer",
		LivingAddress:          "Minsk",
		LivingCity:             "Minsk",
		MartialStatus:          "Fell free",
		MonthlyIncome:          400.0,
		Nationality:            "bel",
		PassportCreationDate:   time.Now(),
		PassportGiver:          "Minsk",
		PassportIdentityNumber: "Long",
		PassportNumber:         "Short",
		PassportSeries:         "Nice",
		Patronymic:             "Testing",
		Pensioner:              false,
		PhoneHome:              "9102390",
		PhoneMobile:            "94982038420",
		RegisterAddress:        "Test Minsk",
		RegisterCity:           "Test Minsk",
		Surname:                "Test Surname",
	})
	if err != nil {
		fmt.Println(err)
	}
}