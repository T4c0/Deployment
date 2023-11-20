const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const Rollbar = require('rollbar');

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '7e817556879d43338a6a83a4817e68c9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

//setup static directory
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})