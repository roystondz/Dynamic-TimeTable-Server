const express = require("express");

const router = express.Router();

router.get("/",function(req,res){
    res.send("Student router is up and working");
})

router.post("/register");
router.post("/login");


router.get("/logout");

module.exports = router; 