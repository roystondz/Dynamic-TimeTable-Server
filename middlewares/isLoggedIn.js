const jwt = require("jsonwebtoken");

const studentModel = require("../models/student-model");

module.exports = async function (req,res,next){
    if(!req.cookies){
        req.flash("error","User must be logged in");
        res.redirect("/");
    }
    try{
        let decodedKey = jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let searchStudent = await studentModel.findOne({usn:decodedKey.usn});
        req.student=student;
        next();
    }catch(err){
        req.flash("sww","Something went wrong");
        res.redirect("/");
    }
}