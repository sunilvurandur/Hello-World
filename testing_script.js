/**
 * Testing script to ensure both "hello_service" and "world_service" are working as expected
 */

//using axios library from npm to make http api cals
const axios = require('axios');

async function testService(){
    console.log('Script Execution Begins');
    //try catch block to handle Errors
    try {
        //contacting hello service
        const helloServiceResponse = await axios.get('http://hello-service:8000/hello')
        .catch((error)=>{
            // console.log("Error while connecting hello service", error.error);
            throw new Error(`Error while connecting to hello service :  ${error}`);
        })

        //contacting world service
        const worldServiceResponse = await axios.get('http://world-service:80/world')
        .catch((error)=>{
            throw new Error(`Error while connecting to world service :  ${error}`);
        })

        //Logging Response
        console.log("hello-service : true");
        console.log("world-service : true");
        console.log(`Combined Response from both Services : ${helloServiceResponse.data} ${worldServiceResponse.data}`);


    } catch (error) {
        console.log(error)
        console.log("Script Execution Ends")
    }
}


testService();