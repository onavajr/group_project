"use strict";

var UserController = require('../controllers/user.controller');

module.exports = function (app) {
  app.post("/api/users/register", UserController.register);
};