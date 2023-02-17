const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const productsController = require("../controllers/products.controller");

const productsRouter = express.Router();

// GET all /products
productsRouter.get("/", productsController.getAllProducts);

// GET /products/id
productsRouter.get("/:productId", productsController.getOneProduct);

// POST /products
productsRouter.post(
  "/",
  upload.single("productImage"),
  productsController.postNewProduct
);

// PATCH /products/id
productsRouter.patch("/:productId", productsController.updateOneProduct);

// DELETE /products/id
productsRouter.delete("/:productId", productsController.deleteOneProduct);

module.exports = productsRouter;
