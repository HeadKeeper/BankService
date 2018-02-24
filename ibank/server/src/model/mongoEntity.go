package model

import "libs/gopkg.in/mgo.v2/bson"

type MongoEntity interface {
	IsValid() (bool)
	GetID() (bson.ObjectId)
}
