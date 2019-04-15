const express = require('express')
const body-parser = require('body-parser')
const path = require('path')

const db = require('./db')
const collection = "todo";

const app = express();

app.use(bodyparser.json())
