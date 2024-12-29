const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    admin:String,
    password:String
})

module.exports = mongoose.model("admin",adminSchema);