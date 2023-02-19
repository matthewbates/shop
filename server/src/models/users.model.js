const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  // by default, mongoose adds an _id property to schemas
  _id: mongoose.Types.ObjectId,
  username: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
