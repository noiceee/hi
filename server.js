const express = require('express');

const app = express();

const PORT = process.env.PORT || '5400';
app.get("/", (req, res)=>{
    res.redirect("https://github.com/noiceee");
})
app.listen(PORT, ()=>{
    console.log("Server is running on port : " + PORT);
})