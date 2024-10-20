let mongoose = require("mongoose");
let featureSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
})
module.exports= mongoose.model("features",featureSchema)