const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akash:Rajibalu%40123@cluster0-6l2ig.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true }, function(err){
    if(err) throw err;
    console.log('mongodb connected locally');
});
var user = require('../models/user');

router.post('/addNewUser', function(req, res){
    var newUser = new user({
    firstName : req.body.firstName,
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    country : req.body.country,
    state : req.body.state,
    address : req.body.address,
    lastName: req.body.lastName,
    zip : req.body.zip,
    });

    user.addUser(newUser, function(err, userData){
        console.log(userData);
        if(err) throw err;
        res.json(userData);
    });
});
module.exports = router;
