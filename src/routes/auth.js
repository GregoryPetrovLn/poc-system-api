const express = require("express");
const { register, login, getMe, logout } = require("../controllers/auth");

const router = express.Router();
//Protect route middleware
const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me", protect, getMe);

module.exports = router;
