// create an express app
const express = require("express")
const app = express()
const path = require('path')
var fs=require('fs');
// use the express-static middleware
//app.use(express.static("public"))


var aasa = fs.readFileSync('./public/apple-app-site-association');
app.get('/apple-app-site-association', function(req, res, next) {
    res.set('Content-Type', 'application/pkcs7-mime');
    res.status(200).send(aasa);
})


app.get('.well-known/apple-app-site-association', function(req, res, next) {
    res.set('Content-Type', 'application/pkcs7-mime');
    res.status(200).send(aasa);
})

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));