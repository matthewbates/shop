const express = require("express");
const productsRouter = require("./routes/products.router");

const app = express();

app.use("/products", productsRouter);

module.exports = app;
