const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:String,
    usn:String,
    branch:String,
    section:String,
    semester:String
});

module.exports = mongoose.model("student",studentSchema);