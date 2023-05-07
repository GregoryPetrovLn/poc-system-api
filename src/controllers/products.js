const asyncHandler = require("../middleware/async");
const Product = require("../models/Product");

//@desc Get all products
//@route GET /api/products
//@access Public
exports.getListProducts = asyncHandler(async (_, res) => {
  res.status(200).json(res.advancedResults);
});

//@desc Create new product
//@route POST /api/product
//@access Private
exports.createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    data: product,
  });
});