const express = require('express');
const routerss = express.Router();
const Bookdata = require('../models/book');

routerss.post('/bookdata',(req, res) =>{
    let bookData = req.body
    let bookdata = new Bookdata(bookData)
    bookdata.save((err,booked)=>{
        if(err){
            console.log(err)
        }else {
            res.status(200).send(booked)
        }
    })
 })

 module.exports = routerss ;