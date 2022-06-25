const express = require("express")
const fetch = require('node-fetch');
const app = express()
app.set("view engine", "ejs");
app.use(express.static('public'))

// define the first route
app.get("/", function (req, res) {
  res.render('index');
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));