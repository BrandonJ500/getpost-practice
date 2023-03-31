const express = require("express");
const app = express();
const path = require("path");
const {v4: uuid} = require("uuid")



app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.get("/tacos", (req, res) => {
    res.send("get /tacos responds");
})

const comments = [
    {
        id: uuid(),
        username: "todd",
        comment: "lol Im todd"
    },
    {
        id: uuid(),
        username: "Skylar",
        comment: "I like to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Sk8erBoi",
        comment: "Plz delete your account, todd"
    },
    {
        id: uuid(),
        username: "onlysayswoof",
        comment: "woof woof woof"
    }
]

app.get("/comments/new", (req, res) => {
    res.render("comments/new")
})

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments })
})
app.post("/tacos", (req, res) => {
    console.log(req.body)
    res.send("post /tacos responds")
})

app.post("/comments", (req, res) => {
    console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment, id:uuid() })
    res.redirect("/comments")
})

app.get("/comments/:id", (req,res)=>{
   const {id}= req.params;
  const comment = comments.find((c=> c.id === id));
  res.render("comments/show",{comment});
})

app.listen(3000, () => {
    console.log("port 3000")
})


