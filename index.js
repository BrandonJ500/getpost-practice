const express = require("express");
const app = express();


app.use(express.urlencoded({extended:true}))

app.get("/tacos", (req,res)=>{
    res.send("get /tacos responds");
})

app.post("/tacos", (req,res)=>{
    console.log(req.body)
    res.send("post /tacos responds")
})
app.listen(3000, ()=> {
    console.log("port 3000")
})