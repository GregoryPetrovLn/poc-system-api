const express = require("express");
const advancedResults = require("../middleware/advancedResults");
const { getListProducts } = require("../controllers/products");
const router = express.Router();
//Protect route middleware
const { protect, authorize } = require("../middleware/auth");
const Product = require("../models/Product");

//Protect for all routes
// router.use(protect);
// router.use(authorize("admin"));

router.route("/").get(advancedResults(Product), getListProducts);

module.exports = router;
