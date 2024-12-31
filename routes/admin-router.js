const express = require("express");
const router = express.Router();
const {adminRegister,adminLogin,logout} = require("../controllers/adminAuthController");

router.post("/register",adminRegister);
router.post("/login",adminLogin);
router.get("/logout",logout);

router.get("/login",function(req,res){
    res.redirect("http://localhost:5173/admin/login");
})

module.exports = router;