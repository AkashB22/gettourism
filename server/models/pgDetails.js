const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pgDetailsSchema = new Schema({
    pgName : {
        type:String
    }, 
    numberOfFloors : {
        type: Number
    }, 
    numberOfRooms :  {
        type: Number
    }, 
    roomsPerFloor :  {
        type: Number
    },  
    vacantRooms :  {
        type: Number
    },  
    filledRooms :  {
        type: Number
    },  
    vacantRoomNos : {
        type : Array 
    },
    filledRoomNos : {
        type : Array 
    },
});

var pgInfo = module.exports = mongoose.model('pg-detail', pgDetailsSchema);

module.exports.getPgInfo = function(pg, callback){
    var query = {
        pgName : pg.pgName
    };
    pgInfo.findOne(query, callback);
};