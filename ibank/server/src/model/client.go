package model

import (
	"libs/gopkg.in/mgo.v2/bson"
)

type Client struct {
	ID         			   bson.ObjectId `bson:"_id,omitempty" json:"id"`
	Surname    			   string        `bson:"surname" json:"surname"`
	Name       			   string        `bson:"name" json:"name"`
	Patronymic 			   string        `bson:"patronymic" json:"patronymic"`
	Birthday   			   string     	 `bson:"birthday" json:"birthday"`
	Gender     			   string        `bson:"gender" json:"gender"`

	PassportSeries 		   string 		 `bson:"passportSeries" json:"passportSeries"`
	//with mask
	PassportNumber         string    	 `bson:"passportNumber" json:"passportNumber"`
	PassportGiver          string    	 `bson:"passportGiver" json:"passportGiver"`
	PassportCreationDate   string 	 	 `bson:"passportCreationDate" json:"passportCreationDate"`
	//with mask
	PassportIdentityNumber string 		 `bson:"passportIdentityNumber" json:"passportIdentityNumber"`

	BirthPlace 			   string 		 `bson:"birthPlace" json:"birthPlace"`
	//select from list
	LivingCity    		   string 		 `bson:"livingCity" json:"livingCity"`
	LivingAddress		   string	     `bson:"livingAddress" json:"livingAddress"`
	//select from list
	RegisterCity    	   string		 `bson:"registerCity" json:"registerCity"`
	RegisterAddress        string		 `bson:"registerAddress" json:"registerAddress"`

	//with mask
	PhoneHome  			   string 		 `bson:"phoneHome" json:"phoneHome"`
	//with mask
	PhoneMobile 		   string 		 `bson:"phoneMobile" json:"phoneMobile"`

	//not required
	Email				   string		 `bson:"email" json:"email"`

	//not required
	JobAddress   	 	   string		 `bson:"jobAddress" json:"jobAddress"`
	//not required
	JobPosition 		   string		 `bson:"jobPosition" json:"jobPosition"`
	//not required
	MonthlyIncome 		   string		 `bson:"monthlyIncome" json:"monthlyIncome"`

	//select from list
	MartialStatus 		   string		 `bson:"martialStatus" json:"martialStatus"`
	//select from list
	Nationality 		   string		 `bson:"nationality" json:"nationality"`
	//select from list
	Disability 			   string		 `bson:"disability" json:"disability"`

	Pensioner 			   bool			 `bson:"pensioner" json:"pensioner"`
	Army      			   bool			 `bson:"army" json:"army"`
}

func (client *Client) IsValid() bool {
	isValid := true
	isValid = isValid && IsString(client.Surname)
	isValid = isValid && IsString(client.Name)
	isValid = isValid && IsString(client.Patronymic)
	isValid = isValid && IsString(client.Gender)
	isValid = isValid && IsString(client.PassportSeries) && IsCapitalString(client.PassportSeries)
	isValid = isValid && IsValidFixedLength(client.PassportSeries, 2)
	isValid = isValid && IsNumberString(client.PassportNumber) && IsValidFixedLength(client.PassportNumber, 7)
	isValid = isValid && IsStringWithNumbers(client.PassportGiver)
	isValid = isValid && IsValidDate(client.PassportCreationDate)
	isValid = isValid && IsPassportID(client.PassportIdentityNumber)
	isValid = isValid && IsString(client.BirthPlace)
	isValid = isValid && IsString(client.LivingCity)
	isValid = isValid && IsStringWithNumbers(client.LivingAddress)
	isValid = isValid && IsString(client.RegisterCity)
	isValid = isValid && IsStringWithNumbers(client.RegisterAddress)
	isValid = isValid && IsPhoneNumber(client.PhoneHome)
	isValid = isValid && IsPhoneNumber(client.PhoneMobile)
	isValid = isValid && IsString(client.MartialStatus)
	isValid = isValid && IsString(client.Nationality)
	isValid = isValid && IsString(client.Disability)
	return isValid
}
