import express from "express";
import path from "path";

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
app.post('/details', (req, res) => {
    const newUser = { name: req.body.name, email: req.body.email };
    users.push(newUser);
    res.render('details', {  });
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
})

