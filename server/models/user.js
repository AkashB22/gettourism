const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : String,
    username : String,
    email : String,
    password : String,
    country : String,
    state : String,
    address : String,
    lastName: String,
    zip : Number,
});

var pgInfo = module.exports = mongoose.model('userdetail', userSchema);

module.exports.addUser = function(user, callback){
    user.save(callback);
};