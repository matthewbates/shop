const express = require("express");
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/signup", usersController.createNewUser);

usersRouter.delete("/:userId", usersController.deleteUser);

usersRouter.post("/login", usersController.userLogin);

module.exports = usersRouter;
