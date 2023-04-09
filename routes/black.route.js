const express = require("express");
const { BlackModel } = require("../models/BlackModel");
const blackRouter=express.Router()


blackRouter.get("/",(req,res)=>{
    res.send("welcome to black")
})





module.exports={blackRouter}