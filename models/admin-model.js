const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    adminId:String,
    password:String
})

module.exports = mongoose.model("admin",adminSchema);