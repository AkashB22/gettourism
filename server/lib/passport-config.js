var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

const GoogleStrategy =require('passport-google-oauth20');

passport.use('userLocal', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
  function(username, password, done) {
    User.getUser(username, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!User.isValid(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
    done(err, user);
});
});

passport.use(new GoogleStrategy(
  {
  //Options for google Strategy
  callbackURL : 'https://getztourism.herokuapp.com/auth/googleRedirect',
  clientID : '398767980699-9pum8crpefomednucie4ukm03d527qog.apps.googleusercontent.com',
  clientSecret : 'N7KiMminLSVXLKwAFghGZUqB'
  }, function(accessToken, RefreshToken, profile, done){
  //passport callback function
  console.log('passport callback function fired');
  console.log(profile);
  var profileEmail = new User({
    email : profile._json.email
  });
  User.getUser(profileEmail.email, function(err, existingUser){
    console.log('user is', existingUser);
    if(existingUser){
      console.log('user is', existingUser);
      done(err, existingUser)
    } else{
      var profileObj = new User({
        firstName : profile._json.given_name,
        username : profile._json.name,
        email : profile._json.email,
        password : null,
        country : profile._json.locale,
        state : null,
        address : null,
        lastName: profile._json.family_name,
        zip : null,
        creationDate : Date.now()
      });
      User.addUser(profileObj, function (err, user) {
          console.log('user created', user)
          done(err, user);
        });
    }
  });
  })
);