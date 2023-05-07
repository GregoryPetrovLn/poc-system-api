const express = require("express");
const advancedResults = require("../middleware/advancedResults");
const {
  getListProducts,
  createProduct,
  getProduct,
} = require("../controllers/products");
const router = express.Router();
//Protect route middleware
const { protect, authorize } = require("../middleware/auth");
const Product = require("../models/Product");

router
  .route("/")
  .get(advancedResults(Product), getListProducts)
  .post(protect, authorize("admin"), createProduct);

router.route("/:id").get(getProduct);

module.exports = router;
