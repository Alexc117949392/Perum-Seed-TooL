const express= require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        id:1,
        name: "person 1",
        age: 24
    },
    {
        id:2,
        name: "person 2",
        age: 64
    },
    {
        id:3,
        name: "person 3",
        age: 28
    },
    {
        id:4,
        name: "person 4",
        age: 30
    }
    )
});

app.listen(5000, () =>{
     console.log("app is running on 5000")
});