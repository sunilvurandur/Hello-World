const express = require('express')
const app = express();

app.get('/world',(req, res)=>{
    res.send("World");
});


app.listen(3000, ()=>{
    console.log("Application is running on port 8000")
});
