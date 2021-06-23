const express = require('express');
const bodyParse = require('body-parser');
const cors = require ('cors');

require('dotenv').config();
const nodemailer = require('nodemailer');

const api = require('./controllers/api');
const {mongoose } = require('./db.js');

var messagebird = require('messagebird')(process.env.MESSAGEBIRD_API_KEY);
var productcontroller = require('./controllers/productcontroller.js');
var bookcontroller = require('./controllers/bookcontroller') ;
var paymentcontroller = require('./controllers/paymentcontroller') ;

var app = express();
app.use(bodyParse.json());

app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('server started at port : 3000'));

app.use('/Product', productcontroller);

app.use('/api', api);
app.use('/booking' , bookcontroller) ;
app.use('/payment' , paymentcontroller) ;




const transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  provider: 'gmail',
  port: 465,
  secure: true,
  auth: {
    user: process.env.PASSWORD, // Enter here email address from which you want to send emails
    pass: process.env.EMAIL, // Enter here password for email account from which you want to send emails
  },
  tls: {
  rejectUnauthorized: false
  }
});

app.use(bodyParse.json());

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/send', function (req, res) {

  let senderName = req.body.contactFormName;
  let senderEmail = req.body.contactFormEmail;
  let messageSubject = req.body.contactFormSubjects;
  let messageText = req.body.contactFormMessage;
  let copyToSender = req.body.contactFormCopy;

  let mailOptions = {
    to: ['karunkumar143225@gmail.com'], // Enter here the email address on which you want to send emails from your customers
    from: senderName,
    subject: 'Feedback',
    text: messageText,
    replyTo: senderEmail
  };

  if (senderName === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (senderEmail === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (messageSubject === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (messageText === '') {
    res.status(400);
    res.send({
    message: 'Bad request'
    });
    return;
  }

  if (copyToSender) {
    mailOptions.to.push(senderEmail);
  }

  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      res.end('error');
    } else {
      console.log('Message sent: ', response);
      res.end('sent');
    }
  });
});
