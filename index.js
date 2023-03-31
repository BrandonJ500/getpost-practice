const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")
app.get("/tacos", (req,res)=>{
    res.send("get /tacos responds");
})

const comments = [
    {
        username: "todd",
        comment: "lol Im todd"
    },
    {
        username: "Skylar",
        comment: "I like to go birdwatching with my dog"
    },
    {
        username: "Sk8erBoi",
        comment: "Plz delete your account, todd"
    },
    {
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments/new", (req,res)=>{
    res.render("comments/new")
})

app.get("/comments", (req,res)=> {
    res.render("comments/index",{comments})
})
app.post("/tacos", (req,res)=>{
    console.log(req.body)
    res.send("post /tacos responds")
})

app.post("/comments", (req,res)=> {
   console.log(req.body)
   const {username, comment} = req.body;
   comments.push({username, comment})
    res.send("It worked")
})
app.listen(3000, ()=> {
    console.log("port 3000")
})


