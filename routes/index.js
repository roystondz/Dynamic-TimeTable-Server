const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const router = express.Router();
const studentModel = require("../models/student-model");

const flash = require("connect-flash");

router.get("/",function(req,res){
    res.redirect("http://localhost:5173/");
})


module.exports=router;