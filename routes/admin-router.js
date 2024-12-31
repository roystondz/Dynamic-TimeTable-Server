const express = require("express");
const router = express.Router();
const {adminRegister,adminLogin,logout} = require("../controllers/adminAuthController");

router.post("/register",adminRegister);
router.post("/login",adminLogin);
router.get("/logout",logout);

module.exports = router;