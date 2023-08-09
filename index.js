import express from "express";
import path from "path";
import mongoose, { mongo } from "mongoose"

mongoose.connect("mongodb+srv://anirudhparida:Anirudhmongo08@cluster0.t4aricu.mongodb.net/")
.then(() => {console.log("Connected to DB")})
.catch(() => {console.log("error connecting to DB")})

const messageSchema = new mongoose.Schema({
    name: String,
    email: String
})

const Message = mongoose.model("Message", messageSchema)

const app = express();
const port = 3000;

//Middleware
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

const users=[]

//setting static folder
// app.get("/", (req, res) => {
//     res.sendFile("index.html");
// });

//setting view engine
app.set("view engine", "ejs");


//rendering html file
app.get("/inputs", (req, res) => {
    res.render("index");
});
app.get("/inputs", (req, res) => {
    res.redirect("details");
});

//sending json data
app.get("/getjson", (req, res) => {
    res.json({ message: "Hello World" , subjects: ["Maths", "Science", "English"]});
});

//posting user data
app.post('/details', async (req, res) => {
    await Message.create({name: req.body.name, email: req.body.email})
    res.render('details', {  });
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
})

