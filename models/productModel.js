const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("Product", productScheme);
