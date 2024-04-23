// Besic module import
const express = require("express")
const app = new express();
const router = require("./src/route/api")
const rateLimit = require("express-rate-limit")
const mongosanitize = require("express-mongo-sanitize")
const hpp = require("hpp")
const helmet = require("helmet")
const cors = require("cors")
const path = require("path");
const mongoose = require("mongoose");


// cors implementation

app.use(cors())


// security implementation

app.use(helmet())
app.use(mongosanitize())
app.use(hpp())
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({extended:true}))

// limiter

const limiter = rateLimit({windowMs: 15*60*1000,max:3000})
app.use(limiter)


// Database Connection implementation

let URL = "mongodb://localhost:27017/CRUD";
mongoose
    .connect(URL)
    .then((res)=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err)
    })



// router implementation

app.use("/api/v1",router)



// front-end connection
app.use(express.static("client/dist"))

// Add react front end routing
app.get("*", function (req, res){
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
})



// All module export

module.exports = app;

