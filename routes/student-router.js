const express = require("express");
const {registerStudent,logout,loginStudent} = require("../controllers/authController");
const router = express.Router();

router.get("/",function(req,res){
    res.send("Student router is up and working");
})

router.post("/register",registerStudent);
router.post("/login",loginStudent);


router.get("/logout",logout);

module.exports = router; 