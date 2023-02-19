const mongoose = require("mongoose");

const User = require("../models/users.model");

function userSignup(req, res, next) {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.password,
  });
}
