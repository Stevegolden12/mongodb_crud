const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = { useNewUrlParser: true }

const state = {
  db: null
}