const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // by default, mongoose adds an _id property to schemas
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number,
});

module.exports = mongoose.model("Product", productSchema);
