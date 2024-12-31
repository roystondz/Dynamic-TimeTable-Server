const generateToken = require("../utils/generateToken");
const adminModel = require("../models/admin-model");
const bcrypt = require("bcrypt");

module.exports.adminRegister = async function(req,res){
    const {adminId , password}= req.body;
    let searchAdmin = await adminModel.findOne({adminId:adminId});
    if(!searchAdmin){
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,async function(err,hash){
                let newAdmin = await adminModel.create(
                    {
                        adminId,
                        password:hash
                    }
                ) 
            })
        })
    }else{
        res.status(400).json({message:"Admin already exists"})
    }
}

module.exports.adminLogin = async function(req,res){
    const {adminId,password} = req.body;
    let adminSearch = await adminModel.findOne({adminId:adminId});
    if(adminSearch){
        bcrypt.compare(password,adminSearch.password,async function(err,result){
            if(result){
                res.redirect("/");
            }else{
                res.status(400).json({message:"Invalid password"});
            }
        })
    }else{
        res.status(400).json({message:"Admin not found"});
    }
}

module.exports.logout=function(req,res){
    res.cookie("token","");
    res.redirect("/");
}