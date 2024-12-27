const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path");


const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(flash());
app.use(express.json());


const index =  require("./routes/index");

app.use("/",index);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})