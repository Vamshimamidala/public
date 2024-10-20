let express = require("express");
require("./dbconnection/dbcoon");
let cors=require("cors");
const featureRouting = require("./roting/featureRoting");
const singupRouting = require("./roting/signupRouting");
const adminsingupRouting = require("./roting/adminsignupRouting");

let app = express();
app.use(express.json());
app.use(cors());
app.use("/feature",featureRouting);
app.use("/signup",singupRouting)
app.use("/adminsign",adminsingupRouting)
app.listen(4000,()=>{
    console.log("server started")
})
