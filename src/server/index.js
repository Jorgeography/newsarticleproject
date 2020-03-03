const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require("aylien_textapi");
const app = express()

const textapi = new aylien({
    application_id: process.env.AppId,
    application_key: process.env.APIkey
  });


app.use(express.static('dist'))

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
