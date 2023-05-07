const express = require("express");
const advancedResults = require("../middleware/advancedResults");
const { getListProducts, createProduct } = require("../controllers/products");
const router = express.Router();
//Protect route middleware
const { protect, authorize } = require("../middleware/auth");
const Product = require("../models/Product");

router
  .route("/")
  .get(advancedResults(Product), getListProducts)
  .post(protect, authorize("admin"), createProduct);


module.exports = router;
