const express = require('express')
const app = express();

app.get('/world',(req, res)=>{
    res.send("World");
});


app.listen(3001, ()=>{
    console.log("Application is running on port 3001")
});
