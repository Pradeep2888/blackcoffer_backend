const mongoose = require("mongoose")

const blackDataSchema=new mongoose.Schema({
    end_year: {type:Number},
    intensity: {type:Number},
    sector:{type:String},
    topic: {type:String},
    insight: {type:String},
    url: {type:String},
    region: {type:String},
    start_year:{type:Number},
    impact:{type:Number},
    added: {type:String},
    published: {type:String},
    country: {type:String},
    relevance: 2,
    pestle: {type:String},
    source: {type:String},
    title: {type:String},
    likelihood: {type:Number}
})

const BlackModel=mongoose.model("data",blackDataSchema)


module.exports={BlackModel}