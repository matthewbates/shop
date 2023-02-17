const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  // by default, mongoose adds an _id property to schemas
  _id: mongoose.Types.ObjectId,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model("Order", orderSchema);
