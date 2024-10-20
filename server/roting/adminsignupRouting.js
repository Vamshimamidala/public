const express = require("express");
let Singup = require("../modal/adminsignModal");
 
let adminsingupRouting = express.Router();
adminsingupRouting.post("/",async (req, res) => {
     let user =new Singup(req.body);
     let result= await user.save();
     res.send(result); 
     
});
adminsingupRouting.post("/adminlogin",async (req, res) => {
   let  {email,password}=req.body;
   let exists= await Singup.findOne({email:email});
  if(!exists){
     res.send("user not found")
  } 
  else if(exists.password!==password){
     res.send("IN valid")
  }
  else{
    res.send("Invalid")
 }
})
module.exports= adminsingupRouting;