const express = require('express')
const axios = require('axios')
const app = express();

app.get('/test',async(req, res)=>{
    console.log('Script Execution Begins');
    //try catch block to handle Errors
    try {
        //contacting hello service
        const helloServiceResponse = await axios.get('http://hello-service:3000/hello')
        .catch((error)=>{
            // console.log("Error while connecting hello service", error.error);
            throw new Error(`Error while connecting to hello service :  ${error}`);
        })

        //contacting world service
        const worldServiceResponse = await axios.get('http://world-service:3001/world')
        .catch((error)=>{
            throw new Error(`Error while connecting to world service :  ${error}`);
        })

        //Logging Responseß
        console.log("hello-service : true");
        console.log("world-service : true");
        console.log(`Combined Response from both Services : ${helloServiceResponse.data} ${worldServiceResponse.data}`);

        res.send(`Combined Response from both Services : ${helloServiceResponse.data} ${worldServiceResponse.data}`);

    } catch (error) {
        console.log(error)
        console.log("Script Execution Ends");
        res.send("Error while contacting services")
    }
});


app.listen(8080, ()=>{
    console.log("Application is running on port 8080")
});
