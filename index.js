const express = require("express")
const {connection} = require("./config/db");
require("dotenv").config()
const cors = require("cors");
const { blackRouter } = require("./routes/black.route");



const app = express();
const PORT=process.env.PORT || 8000

app.use(cors()) 

app.use(express.json())

app.get("/", (req, res) => {
    res.send("welcome to api")
})

app.use("/blackcoffer",blackRouter)




app.listen(PORT, async () => {
    try{
        await connection
        console.log("Connection to DB successfully")
    }
    catch(err){
        console.log(err)
        console.log("Error connecting to DB")
    }
    console.log(`Listening on PORT ${PORT}`)
})
