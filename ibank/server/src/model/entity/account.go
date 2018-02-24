package entity

import "libs/gopkg.in/mgo.v2/bson"

type Account struct {
	ID				bson.ObjectId	`bson:"_id,omitempty" json:"id"`
	AccountNumber 	string 			`bson:"accountNumber" json:"accountNumber"`
	AccountCode 	string	 		`bson:"accountCode" json:"accountCode"`
	Type 			string	 		`bson:"accountType" json:"accountType"`
	Balance 		float64 	 	`bson:"balance" json:"balance"`
}

func (account *Account) IsValid() (bool) {
	return true
}

func (account *Account) GetID() (bson.ObjectId) {
	return account.ID
}