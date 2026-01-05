const express = require("express");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.send("Working");
})   
app.get("/testing",authRoutes);
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})