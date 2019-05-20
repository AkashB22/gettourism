const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pg-project', function(err){
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