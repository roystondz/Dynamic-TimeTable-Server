const express = require('express');
const studentModel = require('../models/student-model');
const jwt = require("jsonwebtoken");
const cookieParser =  require("cookie-parser");
const bcrypt = require('bcrypt');


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
        
    }
    }catch(err){
        console.log(err);
    }
 }