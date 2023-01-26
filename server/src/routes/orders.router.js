const express = require("express");
const ordersController = require("../controllers/orders.controller");

const ordersRouter = express.Router();

// GET all /orders
ordersRouter.get("/", ordersController.getAllOrders);

// GET /orders/id
ordersRouter.get("/:orderId", ordersController.getOneOrder);

// POST /orders
ordersRouter.post("/", ordersController.postNewOrder);

// DELETE /orders/id
ordersRouter.delete("/:orderId", ordersController.deleteOneorder);

module.exports = ordersRouter;
