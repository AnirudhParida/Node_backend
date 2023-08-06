import express from "express";

const app = express();

app.get("/getjson", (req, res) => {
    res.json({ message: "Hello World" , subjects: ["Maths", "Science", "English"]});
});

app.listen(3000,()=> {
    console.log("Server is running on port 3000");
})

