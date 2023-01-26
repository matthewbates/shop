function getAllProducts(req, res, next) {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
}

function getOneProduct(req, res, next) {
  const id = req.params.productId;
  return id === "special"
    ? res.status(200).json({ message: "You found the special ID", id: id })
    : res.status(200).json({ message: "You passed an ID" });
}

function postNewProduct(req, res, next) {
  res.status(201).json({
    message: "Handling POST requests to /products",
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
