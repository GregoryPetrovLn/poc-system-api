const asyncHandler = require("../middleware/async");

//@desc Get all products
//@route GET /api/products
//@access Public
exports.getListProducts = asyncHandler(async (_, res) => {
  res.status(200).json(res.advancedResults);
});
