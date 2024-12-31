const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path");
const cors = require("cors");

//connect database
const db = require("./config/mongoose-connection")

const expressSession = require("express-session");
const flash = require("connect-flash");

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(flash());
app.use(express.json());

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST'],
}))


const index =  require("./routes/index");
const studentRouter=require("./routes/student-router");
const adminRouter = require("./routes/admin-router");

app.use("/",index);
app.use("/student",studentRouter);
app.use("/admin",adminRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});