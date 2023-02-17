const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  // by default, mongoose adds an _id property to schemas
  _id: mongoose.Types.ObjectId,
  name: { type: String, require: true },
  price: { type: Number, require: true },
  productImage: { type: String, require: true },
});

module.exports = mongoose.model("Product", productSchema);
