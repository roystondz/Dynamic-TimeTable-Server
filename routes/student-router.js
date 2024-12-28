const express = require("express");
const {registerStudent,logout,loginStudent} = require("../controllers/authController");
const router = express.Router();

router.get("/",function(req,res){
    res.send("Student router is up and working");
})

router.post("/register",registerStudent);
router.post("/login",loginStudent);
router.get("/login",function(req,res){
    res.redirect("http://localhost:5173/login");
})

router.get("/register",function(req,res){
    res.json({url:"http://localhost:5173/register"});
})

router.get("/logout",logout);

module.exports = router; 