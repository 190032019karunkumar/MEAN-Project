const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: String,
    FirstName: String,
    LastName: String,
    Password: String,
    email: String,
    phone: Number,
});

module.exports = mongoose.model('user', userSchema, 'UserData');