const mongoose = require("mongoose");

mongoose
.connect("mongodb://localhost:27017/DynamicTimeTable")
.then(function(){

})
.catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;