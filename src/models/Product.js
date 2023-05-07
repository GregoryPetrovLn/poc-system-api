const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: [true, "Please add a product name"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price"],
  },
  quantity: {
    type: Number,
    required: [true, "Please add a quantity"],
  },
});

module.exports = mongoose.model("Products", ProductSchema);
