const mongoose = require('mongoose');

var Product = mongoose.model('Products',{
    id: {type: Number},
    name: { type: String},
    price: {type: Number},
    quantity: {type: Number},
    pic: {type: String},
}) ;

module.exports = {Product : Product };