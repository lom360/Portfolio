const express = require("express");
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'))

var urlencodedParser = bodyParser.urlencoded({extended:false});

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Below code is for mailing
// const server = http.Server(app);
// const http = require("http"); // for mailing
// const path = require("path"); // for mailing
const nodemailer = require("nodemailer"); // for mailing
// var port = 500;
// app.set("port",port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Define the first route
app.get("/", function (req, res) {
  res.render('index');
});

const { body, validationResult } = require('express-validator');
app.post("/", function (req, res) {
  var email = req.body.email;
  var name = req.body.name;
  var subject = req.body.name;
  var message = req.body.message;

  // validateForm(email, name, subject, message);

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lom360@mail.fresnostate.edu',
      pass: 'mcmxegxcmyysqyxs'
    }
  });

  var mailOptions = {
    from: email,
    to: 'sarom_thin@outlook.com',
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response)
    }
    res.redirect("/");
  })
  res.redirect("/#contact")
})

// Initialize Web Server
// server.listen(port, function() {
//   console.log("starting server on port " + port);
// });
// console.clear;

// Start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));