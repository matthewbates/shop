const mongoose = require("mongoose");
const Product = require("../models/products.model");

function getAllProducts(req, res, next) {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
  //   res.status(200).json(model);
}

function getOneProduct(req, res, next) {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json(doc);
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
    })
    .catch((err) => console.log(err));
  res.status(201).json({
    message: "Handling POST requests to /products",
    createdProduct: product,
  });
}

function updateOneProduct(req, res, next) {
  res.status(200).json({
    message: "Handling PATCH requests to /products/id",
  });
}

function deleteOneProduct(req, res, next) {
  res.status(200).json({
    message: "Handling DELETE requests to /products/id",
  });
}

module.exports = {
  getAllProducts,
  getOneProduct,
  postNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
