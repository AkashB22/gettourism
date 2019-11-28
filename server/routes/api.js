const express = require('express');
const router = express.Router();

const passport = require('passport');
let helper = require('../lib/helper');
let mail = require('../lib/mail');

var user = require('../models/user');
var email = require('../models/email')

router.post('/user', function(req, res){
    var firstName = typeof(req.body.firstName) == 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : '';
    var username = typeof(req.body.username) == 'string' && req.body.username.trim().length > 0 ? req.body.username : '';
    var email = typeof(req.body.email) == 'string' && req.body.email.trim().length > 0 && req.body.email.indexOf('@') > -1 ? req.body.email : '';
    var password = typeof(req.body.password) == 'string' && req.body.password.trim().length > 0 ? req.body.password : '';
    var country = typeof(req.body.country) == 'string' && req.body.country.trim().length > 0 ? req.body.country : '';
    var state = typeof(req.body.state) == 'string' && req.body.state.trim().length > 0 ? req.body.state : '';
    var address = typeof(req.body.address) == 'string' && req.body.address.trim().length > 0 ? req.body.address : '';
    var lastName = typeof(req.body.lastName) == 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : '';
    var zip = typeof(req.body.zip) == 'string' && req.body.zip.length > 0 ? req.body.zip : '';
    
    if(firstName && username && email && password && country && state){
        password = helper.hash(password);
        if(password){
            var newUser = new user({
                firstName : firstName,
                username : username,
                email : email,
                password : password,
                country : country,
                state : state,
                address : address,
                lastName: lastName,
                zip : zip,
                creationDate : Date.now()
                });
            
                user.addUser(newUser, function(err, userData){
                    console.log(userData);
                    if(err) throw err;
                    res.json(userData);
                });
        } else {
            res.json({"error" : "password can not be null"});
        }
    } else{
        res.json({"error" : "enter a valid credential or fill the mandatory fields highlighted"});
    }
});

router.get('/user', function(req, res){
    var email = req.query.email;
    //verify token
    user.getUser(email, function(err, data){
        if(err) throw err;
        res.status(200).json(data);
    });
});

router.put('/user/:email', function(req, res){
    var firstName = typeof(req.body.firstName) == 'string' && req.body.firstName.trim().length > 0 ? req.body.firstName : '';
    var username = typeof(req.body.username) == 'string' && req.body.username.trim().length > 0 ? req.body.username : '';
    var email = typeof(req.params.email) == 'string' && req.params.email.trim().length > 0 && req.params.email.indexOf('@') > -1 ? req.params.email : '';
    var password = typeof(req.body.password) == 'string' && req.body.password.trim().length > 0 ? req.body.password : '';
    var country = typeof(req.body.country) == 'string' && req.body.country.trim().length > 0 ? req.body.country : '';
    var state = typeof(req.body.state) == 'string' && req.body.state.trim().length > 0 ? req.body.state : '';
    var address = typeof(req.body.address) == 'string' && req.body.address.trim().length > 0 ? req.body.address : '';
    var lastName = typeof(req.body.lastName) == 'string' && req.body.lastName.trim().length > 0 ? req.body.lastName : '';
    var zip = typeof(req.body.zip) == 'number' && req.body.zip > 0 ? req.body.zip : '';
    
    if(email){
        //Verify token
        user.getUser(email, function(err, userData){
            if(firstName){
                userData.firstName = firstName;
            }
            if(username){
                userData.username = username;
            }
            if(password){
                userData.password = password;
            }
            if(country){
                userData.country = country;
            }
            if(state){
                userData.state = state;
            }
            if(address){
                userData.address = address;
            }
            if(lastName){
                userData.lastName = lastName;
            }
            if(zip){
                userData.zip = zip;
            }
            user.updateUser(userData, function(err, data){
                if(err) throw err;
                user.getUser(userData.email, function(err, data){
                    if(err) throw err;
                    res.status(200).json(data);
                });
            })
        });
    }
});

router.delete('/user/:email', function(req, res){
    var email = req.params.email;
    user.deleteUser(email, function(err, data){
        if(err) throw err;
        res.status(200).json(data);
    });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('userLocal', function(err, user, info) {
      if (err) { return res.status(501).json(err); }
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
        if (err) { return res.status(501).json(info); }
        return res.status(200).json({message:'Login Success',
            "user" :user.username});
      });
    })(req, res, next);
  });

  router.get('/logout', isValidUser, function(req, res){
    req.logout();
    return res.status(200).json({message : 'Logout success'});
  });

  router.get('/home', isValidUser, function(req, res){
    req.session.userDetails = req.user;
    res.status(200).json(req.user);
  });

  function isValidUser(req, res, next){
      if(req.isAuthenticated()) {
          next();
      } else{
          return res.status(401).json({"message" : "invalid Request"});
      }
  }

  router.post('/email', function(req, res){
    var from = typeof(req.body.From) == 'string' && req.body.From.trim().length > 0 ? req.body.From : '';
    var to = typeof(req.body.To) == 'string' && req.body.To.trim().length > 0 ? req.body.To : '';
    var members = typeof(req.body.members) == 'string' && req.body.members.trim().length > 0 ? req.body.members : '';
    var onwardsDate = typeof(req.body.onwardsDate) == 'string'  ? req.body.onwardsDate : '';
    var hotelCategory = typeof(req.body.hotelCategory) == 'string' && req.body.hotelCategory.trim().length > 0 ? req.body.hotelCategory : '';
    var mealPlan = typeof(req.body.mealPlan) == 'string' && req.body.mealPlan.trim().length > 0 ? req.body.mealPlan : '';
    var otherComments = typeof(req.body.otherComments) == 'string' && req.body.otherComments.trim().length > 0 ? req.body.otherComments : '';
    var emailNew = typeof(req.body.email) == 'string' && req.body.email.trim().length > 0 && req.body.email.indexOf('@') > -1 ? req.body.email : '';

    if(from && to && members && onwardsDate){
        if(emailNew){
            var newEmail = new email({
                email : emailNew,
                from : from,
                to : to,
                members : members,
                onwardsDate : onwardsDate,
                hotelCategory : hotelCategory,
                mealPlan : mealPlan,
                otherComments : otherComments,
                creationDate : Date.now()
                });
            
                email.saveEmail(newEmail, function(err, data){
                    console.log(data);
                    if(err) throw err;
                });
                mail.sendEmail(newEmail, function(err, data){
                    if(err){
                        res.status(500).json({"error" : err})
                    } else{
                        res.status(200).json({"success" : "You will be notified with mail based on you request"})
                    }
                });
        } else {
            res.json({"error" : "email can not be null"});
        }
    } else{
        res.json({"error" : "enter a valid credential or fill the mandatory fields highlighted"});
    }
});
module.exports = router;
