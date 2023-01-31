const mongoose = require("mongoose");
const Product = require("../models/products.model");

function getAllProducts(req, res, next) {
  Product.find()
    // .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

function getOneProduct(req, res, next) {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found from provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
}

function postNewProduct(req, res, next) {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  // method provided by mongoose that you can use on mongoose models
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

function updateOneProduct(req, res, next) {
  const id = req.params.productId;
  const updateOps = {};
  // loop through all operations of req.body
  for (let ops of req.body) {
    // propName can be things like name or price
    updateOps[ops.propName] = ops.value;
  }
  Product.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

function deleteOneProduct(req, res, next) {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

module.exports = {
  getAllProducts,
  getOneProduct,
  postNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
