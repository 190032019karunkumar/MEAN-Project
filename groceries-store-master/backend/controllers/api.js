const express = require('express');
const routers = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//To Post Signin Data
routers.post('/register',(req, res) =>{
   let userData = req.body
   let user = new User(userData)
   user.save((err,registered)=>{
       if(err){
           console.log(err)
       }else {
           let payload = { subject: registered._id}
           let token = jwt.sign(payload, 'secretkey')
           res.status(200).send({token,registered})
       }
   })
})

//to Login
routers.post('/login', (req, res) => {
    let userData = req.body 
    User.findOne({ UserName: userData.UserName}, (err, user) =>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send('Invaild Username')
            } else if(user.Password !== userData.Password) {
                res.status(401).send('Invalid password')
            }else {
                let payload = {subject: user._id}
                let token = jwt.sign(payload , 'secretkey')
                res.status(200).send({token, user})
            }
        }
    })
})

//to get data of the userid
routers.post('/log', (req, res) => {
    let userData = req.body 
    User.findOne({ UserName: userData.UserName}, (err, user) =>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send('Invaild Username')
            } else if(user.Password !== userData.Password) {
                res.status(401).send('Invalid password')
            }else {
               
                res.status(200).send(userData)
            }
        }
    })
})


routers.post('/regist',(req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((err,registered)=>{
        if(err){
            console.log(err)
        }else {
           
            res.status(200).send(userData)
        }
    })
 })
 

//to get data of the paticular id number

routers.get('/:id',(req ,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with the given id : ${req.params.id}');

User.findById(req.params.id, (err, docs) => {
    if(!err){res.send(docs);}
        else { console.log('Error in retriewing product :' + Json .stringify(err,undefined,2))}
})
});

// update operation
routers.put('/id',(req ,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with the given id : ${req.params.id}');
    
    var pro = {
        UserName: req.body.UserName,
        FIrstName: req.body.FIrstName,
        LastName: req.body.LastName,
        Password: req.body.Password,
        email: req.body.email,
        phone: req.body.phone,
    
    };
    User.findByIdAndUpdate(req.params.id, { $set: pro}, {new: true} ,(err , doc) =>{
        if(!err){res.send(doc);}
        else { console.log('Error in update products :' + Json .stringify(err,undefined,2))}
    });
  });

module.exports = routers ;