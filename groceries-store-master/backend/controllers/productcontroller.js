const express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router() ;
var ObjectId = require('mongodb').ObjectId;

var { Product } = require('../models/products');


//to get data

router.get('/' , (req, res) => {
    Product.find((err, doc) => {
        if(!err){res.send(doc);}
        else { console.log('Error in retrieving data :' + Json .stringify(err,undefined,2))}
    });
});


//to get data of the paticular id number

router.get('/:id',(req ,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with the given id : ${req.params.id}');

Product.findById(req.params.id, (err, docs) => {
    if(!err){res.send(docs);}
        else { console.log('Error in retriewing product :' + Json .stringify(err,undefined,2))}
})
});

//to post data

router.post('/',(req, res) => {
    var product =  new Product({
        id : req.body.id ,
        name: req.body.name,
        price: req.body.price ,
        quantity : req.body.quantity,
        pic : req.body.pic
    });
    
    // to save the data

    product.save((err, doc) => {
        if(!err){res.send(doc);}
            else { console.log('Error in products save :' + Json .stringify(err,undefined,2))}
    });
  });


  // update operation

  router.put('/:id',(req ,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with the given id : ${req.params.id}');
    
    var pro = {
            id : req.body.id ,
            name: req.body.name,
            price: req.body.price ,
            quantity : req.body.quantity,
            pic : req.body.pic 
    };
    Product.findByIdAndUpdate(req.params.id, { $set: pro}, {new: true} ,(err , doc) =>{
        if(!err){res.send(doc);}
        else { console.log('Error in update products :' + Json .stringify(err,undefined,2))}
    });
  });

//delete operation

router.delete('/:id',(req,res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with the given id : ${req.params.id}');

    Product.findByIdAndRemove(req.params.id, (err,doc) =>{
        if(!err){res.send(doc);}
        else { console.log('Error in products delete :' + Json .stringify(err,undefined,2))}
    });
});


module.exports = router ;