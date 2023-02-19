const express = require("express");
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/signup", usersController.userSignup);

module.exports = usersRouter;
