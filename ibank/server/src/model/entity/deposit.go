package entity

import (
	"libs/gopkg.in/mgo.v2/bson"
)

type Deposit struct {
	ID  				bson.ObjectId	`bson:"_id,omitempty" json:"id"`
	DepositType 		string			`bson:"depositType" json:"depositType"`
	ContractNumber 		int				`bson:"contractNumber" json:"contractNumber"`
	CurrencyType 		string 			`bson:"currencyType" json:"currencyType"`
	DepositStartDate 	string			`bson:"depositStartDate" json:"depositStartDate"`
	DepositEndDate 		string			`bson:"depositEndDate" json:"depositEndDate"`
	DepositTerm 		string			`bson:"depositTerm" json:"depositTerm"`
	DepositAmount 		int 			`bson:"depositAmount" json:"depositAmount"`
	DepositInterest 	float64 		`bson:"depositInterest" json:"depositInterest"`
}

func (deposit *Deposit) IsValid() bool {
	return true
}

func (deposit *Deposit) GetID() (bson.ObjectId) {
	return deposit.ID
}