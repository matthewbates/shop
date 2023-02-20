const express = require("express");
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/", usersController.createNewUser);

usersRouter.delete("/:userId", usersController.deleteUser);

module.exports = usersRouter;
