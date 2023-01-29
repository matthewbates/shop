const orders = [
  {
    id: 1,
    quantity: 10,
  },
];

function getAllOrders(req, res, next) {
  //   res.status(200).json({
  //     message: "All orders were fetched",
  //   });
  res.status(200).json(orders);
}

function getOneOrder(req, res, next) {
  res.status(200).json({
    message: "Single order detail",
    orderId: req.params.orderId,
  });
}

function postNewOrder(req, res, next) {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "A new order was created",
    order: order,
  });
  orders.push(order);
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
