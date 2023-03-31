const express = require("express");
const app = express();
const path = require("path");
const {v4: uuid} = require("uuid")
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.get("/tacos", (req, res) => {
    res.send("get /tacos responds");
})

let comments = [
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

app.get("/comments/:id/edit", (req,res)=>{
    const {id}= req.params;
    const comment = comments.find((c=> c.id === id));
    res.render("comments/edit", {comment})
})


app.get("/comments/:id", (req,res)=>{
    const {id}= req.params;
   const comment = comments.find((c=> c.id === id));
   res.render("comments/show",{comment});
 })

app.delete("/comments/:id", (req,res)=>{
    const {id}= req.params;
   comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})

app.patch("/comments/:id", (req,res)=>{
    const {id}= req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find((c=> c.id === id));
    foundComment.comment = newCommentText;
    res.redirect("/comments")
})



app.listen(3000, () => {
    console.log("port 3000")
})


