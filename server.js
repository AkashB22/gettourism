const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akash:Rajibalu%40123@cluster0-6l2ig.mongodb.net/getzTourism?retryWrites=true',{ useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require('./server/lib/passport-config');

const api = require('./server/routes/api');

const port = 30303;

const app = express();

app.use(express.static(path.join(__dirname,'dist/newProject')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(cors({
    origin:['http:localhost:30303'],
    credentials : true
}));

app.use(session({
    name:'user.sid',
    resave:false,
    saveUninitialized:false,
    secret:'narutoUzumaki',
    cookie: {
        maxAge : 36000000,
        httpOnly:false,
        secure:false
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', api);

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'dist/newProject/index.html'));
});

app.listen(port, function(){
    console.log('server running in port 30303');
});
