function getAllOrders(req, res, next) {
  res.status(200).json({
    message: "All orders were fetched",
  });
}

function getOneOrder(req, res, next) {
  res.status(200).json({
    message: "Single order detail",
    orderId: req.params.orderId,
  });
}

function postNewOrder(req, res, next) {
  res.status(201).json({
    message: "A new order was created",
  });
}

function deleteOneorder(req, res, next) {
  res.status(200).json({
    message: "Single order was deleted",
    orderId: req.params.orderId,
  });
}

module.exports = {
  getAllOrders,
  getOneOrder,
  postNewOrder,
  deleteOneorder,
};
