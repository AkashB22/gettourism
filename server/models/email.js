const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emailSchema = new Schema({
    email : String,
    from : String,
    to : String,
    members : String,
    onwardsDate : String,
    hotelCategory : String,
    mealPlan : String,
    otherComments: String,
    creationDate : Date
});

var email = module.exports = mongoose.model('emailDetail', emailSchema);

module.exports.saveEmail = function(emailInfo, callback){
    emailInfo.save(callback);
};
