const express = require("express");
const ordersRouter = require("./routes/orders.router");
const productsRouter = require("./routes/products.router");

const app = express();

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
