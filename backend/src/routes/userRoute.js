const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const {
  userSignup,
  userLogin,
  userLogout,
  getUserProfile,
} = require("../controllers/userController");

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.post("/logout", userLogout);

router.get("/profile/:id", getUserProfile);
module.exports = router;
