const mongoose = require('mongoose');
const helper = require('../lib/helper')

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
    zip : String,
    creationDate : Date
});

var userInfo = module.exports = mongoose.model('userdetail', userSchema);

module.exports.addUser = function(user, callback){
    user.save(callback);
};

module.exports.getUser =  function(email, callback){
    var query = {'email' : email};
    userInfo.findOne(query, callback);
}

module.exports.updateUser = function(userData, callback){
    var query = {'email' : userData.email}
    userInfo.findOneAndUpdate(query, userData, callback);
}

module.exports.deleteUser = function(email, callback){
    var query = {'email' : email}
    userInfo.findOneAndDelete(query, callback);
}

module.exports.isValid = function(password, userPassword){
    let hashedPassword = helper.hash(password);
    if(hashedPassword === userPassword){
        return true;
    } else{
        return false;
    }
}