const express = require("express");
let Feature = require("../modal/featureModal");

let featureRouting = express.Router()

featureRouting.post("",async(req,res)=>{
    let feature = new Feature(req.body);
    let result = await feature.save();
    res.send(result)
})
featureRouting.get("", async(req,res)=>{
    let feature= await Feature.find();
    res.send(feature)
})
featureRouting.delete("/:id",async(req,res)=>{
 let id= req.params.id;
 let feature= await Feature.deleteOne({_id:id});
 res.send(feature);
})
 

module.exports=featureRouting;