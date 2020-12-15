const mysql = require('mysql');
const express = require('express');
var app = express();
var bodyParser = require('body-parser')
const cors = require('cors');

var corsOptions = {
    origin: true,
    optionsSuccessStatus: 200 // For legacy browser support
}


app.use(function (req, res, next) {
    
    bodyParser.json({ type: 'application/*+json' });
    bodyParser.text({ type: 'text/html' });
    bodyParser.raw({ type: 'application/vnd.custom-type' });

    (cors(corsOptions));

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

module.exports = app;


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '12345',
    database : 'employeedb',
    multiplestatements : true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Db is Sucess');
    else
    console.log('db is failed \n Error :' + JSON.stringify(err, undefined, 2));
});

app.listen(4800,()=>console.log('Express server is running  at port 4800'));

app.get('/', function (req, res) {

    
    res.send('hello world')
})


app.get('/file',(req,res)=>{
    mysqlConnection.query('SELECT * FROM file',(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});