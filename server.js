const express = require('express')
const app = express();
const _helloroute = require('./routes/_helloroute');
const _worldroute = require('./routes/_worldroute');
app.use('/hello',_helloroute);
app.use('/world',_worldroute);


app.listen(8000, ()=>{
    console.log("Application is running on port 8000")
});
