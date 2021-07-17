"use strict";

var User = require('../models/user.model');

var bcrypt = require('bcrypt');

module.exports = {
  register: function register(req, res) {
    var newUser = new User(req.body);
    console.log(newUser);
    newUser.save().then(function () {
      console.log("successful registration");
      res.json({
        message: "Successfully registered",
        user: newUser
      });
    })["catch"](function (err) {
      console.log(err);
      res.status(400).json(err);
    });
  }
};