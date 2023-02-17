const mongoose = require("mongoose");

const Order = require("../models/orders.model");
const Product = require("../models/products.model");

function getAllOrders(req, res, next) {
  Order.find()
    .select("_id product quantity")
    .populate("product", "name")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map((doc) => {
          return {
            id: doc._id,
            product: doc.product,
            quantity: doc.quanitty,
            request: {
              type: "GET",
              url: `http://localhost:8000/orders/${doc._id}`,
            },
          };
        }),
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

function getOneOrder(req, res, next) {
  id = req.params.orderId;
  Order.findById(id)
    .exec()
    .then((order) => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found",
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: "GET",
          url: `http://localhost:8000/orders`,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
}

function postNewOrder(req, res, next) {
  Product.findById(req.body.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      const order = new Order({
        // authomatically generates a new ID
        _id: new mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId,
      });
      return order.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Order placed",
        createdOrder: {
          _id: result._id,
          product: result.product,
          quantity: result.quantity,
        },
        request: {
          type: "POST",
          url: `http://localhost:8000/orders/${result._id}`,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Product not found",
        error: err,
      });
    });
}

function deleteOneorder(req, res, next) {
  const id = req.params.orderId;
  Order.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: `http://localhost:8000/orders`,
          body: { productId: "ID", quantity: "Number" },
        },
      });
    })
    .catch((err) => {
      error: err;
    });
}

module.exports = {
  getAllOrders,
  getOneOrder,
  postNewOrder,
  deleteOneorder,
};
