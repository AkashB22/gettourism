const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const api = require('./server/routes/api');

const port = 4002;

const app = express();

app.use(express.static(path.join(__dirname,'dist/newProject')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,'dist/newProject/index.html'));
});

app.listen(port, function(){
    console.log('server running in port 4000');
})
