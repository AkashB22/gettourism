const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const config = require('./config');
const conf = new config();
console.log(conf.DB_URI);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://akash:yUab2lRcVz6r2Mq8@cluster0-6l2ig.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });

mongoose.connect('url',{ useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('once', ()=>{
    console.log('mongoDB connected')
});

require('./server/lib/passport-config');

const api = require('./server/routes/api');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,'dist/newProject')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
    origin:['http://localhost:8060'],
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
app.use('/auth', auth);

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'dist/newProject/index.html'));
});

app.listen(port, function(){
    console.log('server running in port ' + port);
});
