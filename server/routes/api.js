const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect('mongodb+srv://akash:Rajibalu@123@cluster0-6l2ig.mongodb.net/pgApp?retryWrites=true', function(err){
=======
mongoose.connect('mongodb://localhost/get-tourism', function(err){
>>>>>>> 781ba810cba60a68d10230ebf4d9289d7e909f4c
    if(err) throw err;
    console.log('mongodb connected locally');
});
var PgDetail = require('../models/pgDetails');

router.get('/pgDetails', function(req,res){
    console.log('get request for all pgDetails');
    const pgName = new PgDetail({
        pgName : 'test'
    });
    PgDetail.getPgInfo(pgName, function(err, pgInfo){
        if(err) throw err;
        res.json(pgInfo);
    });
});

module.exports = router;
