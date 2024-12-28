const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/DynamicTimeTable")
.then(function(){
    console.log("Connected")
})
.catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;