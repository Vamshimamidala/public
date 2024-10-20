const express = require("express");
let Singup = require("../modal/sigupModal");

let singupRouting = express.Router();

 
singupRouting.post("/", async (req, res) => {
    let exists = new Singup(req.body);
    let result = await exists.save();
    res.send(result);
});
 
singupRouting.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let exists = await Singup.findOne({ email: email });
    
    if (!exists) {
        res.send("user not found");
    } else if (exists.password === password) {
        res.send("valid");
    } else {
        res.send("Invalid");
    }
});

module.exports = singupRouting;
