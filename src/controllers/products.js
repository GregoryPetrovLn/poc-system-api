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

//@desc Get single product
//@route GET /api/product/:id
//@access Public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id of ${req.params.id}`, 400)
    );
  }
  res.status(200).json({ success: true, data: product });
});
