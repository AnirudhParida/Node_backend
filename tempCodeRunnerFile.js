app.get("/getjson", (req, res) => {
    res.json({ message: "Hello World" , subjects: ["Maths", "Science", "English"]});
});