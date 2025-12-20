const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors({
    origin:"http://localhost:5173",
    method:["GET","POST"]
}))

const port = 8080;
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.listen(port,()=>{
    console.log("App is running on port : ",port)
})