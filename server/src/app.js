// express handles middleware and routing
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const ordersRouter = require("./routes/orders.router");
const productsRouter = require("./routes/products.router");

const app = express();

// funnel all requests through middleware
app.use(morgan("dev"));
// returns middleware that only parses urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// returns middleware that only parses json
app.use(bodyParser.json());

// routes which should handle requests
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

// error used if we don't find a matching route
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// catches errors from anywhere else in the app
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
