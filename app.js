const express = require("express");
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer"); // for mailing
const {check, validationResult} = require('express-validator');
const urlencodeParser = bodyParser.urlencoded({ extended: false });
const expressSession = require('express-session');
const router = express.Router();
const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(expressValidator());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));


// Define the first route
app.get("/", function (req, res) {
  // res.render('index');
  // res.render('index', {title: 'Message sent. Thank you for your interest.', success: false, errors: req.session.errors});
  const success = 'pending';
  const alert = undefined;
  res.render('index', {alert, success});
  req.session.errors = null;
});

// const { body, validationResult } = require('express-validator');
app.post("/", urlencodeParser, [
    check('email', 'Please enter a valid email. i.e. @example.com')
      .isEmail()
      .normalizeEmail(),
    check('name', 'Please enter a name with at least 1 character')
      .isLength({min: 1}),
    check('message', 'Please enter a message with at least 5 character')
      .isLength({min: 1})
], function (req, res) {
  const errors = validationResult(req);
  // var alert;
  if(!errors.isEmpty()) {
    const alert = errors.array()
    const success = 'failed'
    res.render('index', {alert, success})
  }
  else {
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
      // res.redirect("/");
      // res.redirect("/#contact");
    })
    const success = 'allPass'
    const alert = undefined
    res.render('index',{alert, success});
  }

  var email = req.body.email;
  var name = req.body.name;
  var subject = req.body.name;
  var message = req.body.message;

  // body('email').isEmail();

  // var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'lom360@mail.fresnostate.edu',
  //     pass: 'mcmxegxcmyysqyxs'
  //   }
  // });

  // var mailOptions = {
  //   from: email,
  //   to: 'sarom_thin@outlook.com',
  //   subject: subject,
  //   text: message
  // };

  // transporter.sendMail(mailOptions, function(error, info) {
  //   if(error) {
  //     console.log(error);
  //   } else {
  //     console.log("Email Sent: " + info.response)
  //   }
  //   res.redirect("/");
  // })
  // console.log(alert);
  // res.redirect("/#contact");
})

// Initialize Web Server
// server.listen(port, function() {
//   console.log("starting server on port " + port);
// });
// console.clear;

// Start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));