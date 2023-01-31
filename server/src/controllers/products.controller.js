// docs for API model: https://mongoosejs.com/docs/api/model.html
// docs for API query (.exec(), .then(), etc.): https://mongoosejs.com/docs/api/query.html

const mongoose = require("mongoose");
const Product = require("../models/products.model");

// GET /products
function getAllProducts(req, res, next) {
  Product.find()
    .exec()
    .then((model) => {
      console.log(model);
      res.status(200).json(model);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

// GET /products/productId
function getOneProduct(req, res, next) {
  id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((item) => {
      console.log(item);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(500).json({
          error: "Could not find product by provided ID",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
}

// POST /products
function postNewProduct(req, res, next) {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  })
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        createdProduct: result,
      });
    });
}

// PATCH /products/productId
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

// DELETE /products/productId
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
