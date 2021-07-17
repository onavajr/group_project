"use strict";

require('dotenv').config();

var express = require('express');

var cors = require('cors');

var app = express();
var port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require('./config/productmanager.config');

require('./routes/productmanager.routes')(app);

require('./routes/user.routes')(app);

app.listen(process.env.MY_PORT, function () {
  return console.log("Listening on port: ".concat(process.env.MY_PORT));
});