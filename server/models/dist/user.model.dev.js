"use strict";

var _this = void 0;

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"]
  },
  email: {
    type: String,
    required: [true, "email is required"]
  },
  password: {
    type: String,
    required: [true, "password is required"]
  }
}, {
  timestamps: true
});
UserSchema.virtual("confirmPassword").get(function () {
  return _this._confirmPassword;
}).set(function (value) {
  return _this._confirmPassword = value;
});
UserSchema.pre("validate", function (next) {
  console.log(this.password);
  console.log(this.confirmPassword);

  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password did not match");
  }

  next();
});
UserSchema.pre("save", function (next) {
  var _this2 = this;

  bcrypt.hash(this.password, 10).then(function (hashedPassword) {
    console.log("password: " + _this2.password);
    console.log("hased: " + hashedPassword);
    _this2.password = hashedPassword;
    next();
  });
});
var User = mongoose.model("User", UserSchema);
module.exports = User;