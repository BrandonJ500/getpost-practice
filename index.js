const express = require("express");
const app = express();

app.get("/tacos", (req,res)=>{
    res.send("get /tacos responds");
})

app.post("/tacos", (req,res)=>{
    res.send("post /tacos responds")
})
app.listen(3000, ()=> {
    console.log("port 3000")
})