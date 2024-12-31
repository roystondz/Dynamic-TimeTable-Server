const express = require('express');
const studentModel = require('../models/student-model');
const jwt = require("jsonwebtoken");
const cookieParser =  require("cookie-parser");
const generateToken = require("../utils/generateToken");

 module.exports.registerStudent = async function(req,res){
    try{
        let {name, usn, semester, section, branch} = req.body;
    let student =  await studentModel.findOne({usn});

    if(student){
        return res.status(400).json({message: "Student already exists"});
    }
    if(!student){
        let newStudent = await studentModel.create({
            name,
            usn,
            semester,
            section,
            branch
        })
        res.redirect("/");
    }
    }catch(err){
        console.log(err);
    }
 }

module.exports.loginStudent = async function(req,res){
    try{
        let { usn, password} = req.body;
        if(password == null){
            let searchStudent = await studentModel.findOne({usn})
            if(searchStudent){
                //let token = generateToken(searchStudent);
                //res.cookie("token", token);
                res.redirect("/");
            }else{
                res.redirect("/");
            }
        }
        if(password!=null){
            let searchStudent = await studentModel.findOne({usn});
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.logout=function(req,res){
    res.cookie("token","");
    res.redirect("/");
}