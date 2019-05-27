var helper = {};
var crypto = require('crypto');
var config = require('./helper')

helper.hash = function(passwordStr){
 if(typeof(passwordStr) == 'string' && passwordStr.trim().length >0){
    var hash = crypto.createHash('sha256', config.hashingSecret).update(passwordStr).digest('hex');
    return hash;
 } else{
     return false;
 }
}

module.exports = helper;