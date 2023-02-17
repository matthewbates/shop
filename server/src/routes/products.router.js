const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    // accept a file
    cb(null, true);
  } else {
    // reject a file
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

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
