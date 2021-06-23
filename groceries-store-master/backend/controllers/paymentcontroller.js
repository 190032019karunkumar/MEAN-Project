const mongoose = require('mongoose');

const express = require('express');
const routersss = express.Router();

const pay  = require('../models/payment');

routersss.post('/paydata',(req, res) =>{
    let payData = req.body
    let paydata = new pay(payData)
    paydata.save((err,booked)=>{
        if(err){
            console.log(err)
        }else {
            res.status(200).send(booked)
        }
    })
 })

 module.exports = routersss ;