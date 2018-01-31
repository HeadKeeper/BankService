package model

import (
	"time"

	"libs/gopkg.in/mgo.v2/bson"
)

type Client struct {
	ID         			   bson.ObjectId `bson:"_id" json:"id"`
	Surname    			   string        `bson:"surname" json:"surname"`
	Name       			   string        `bson:"name" json:"name"`
	Patronymic 			   string        `bson:"patronymic" json:"patronymic"`
	Birthday   			   time.Time     `bson:"birthday" json:"birthday"`
	Gender     			   string        `bson:"birthday" json:"birthday"`

	PassportSeries 		   string 		 `bson:"passportSeries" json:"passportSeries"`
	//with mask
	PassportNumber         string    	 `bson:"passportNumber" json:"passportNumber"`
	PassportGiver          string    	 `bson:"passportGiver" json:"passportGiver"`
	PassportCreationDate   time.Time 	 `bson:"passportCreationDate" json:"passportCreationDate"`
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
	JobPosition 		   string		 `bson:"jobAddress" json:"jobAddress"`
	//not required
	MonthlyIncome 		   float64		 `bson:"monthlyIncome" json:"monthlyIncome"`

	//select from list
	MartialStatus 		   string		 `bson:"martialStatus" json:"martialStatus"`
	//select from list
	Nationality 		   string		 `bson:"nationality" json:"nationality"`
	//select from list
	Disability 			   string		 `bson:"disability" json:"disability"`

	Pensioner 			   bool			 `bson:"pensioner" json:"pensioner"`
	Army      			   bool			 `bson:"army" json:"army"`
}
