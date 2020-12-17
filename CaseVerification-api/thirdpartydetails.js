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
    database : 'caseverificationdb',
    multiplestatements : true
});

mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Db is Sucess');
    else
    console.log('db is failed \n Error :' + JSON.stringify(err, undefined, 2));
});

app.listen(4700,()=>console.log('Express server is running  at port 4700'));

app.get('/', function (req, res) {

    
    res.send('hello world')
})


app.get('/thirdpartydetails',(req,res)=>{
    mysqlConnection.query('SELECT * FROM thirdpartydetails',(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


//post

var jsonParser = bodyParser.json()

app.post('/thirdpartydetails',jsonParser, (req,res)=>{
    let emp = req.body;
    var sql = `INSERT INTO caseverificationdb.thirdpartydetails (ID,CaseID,ThirdpartyName,T_PhoneNumber,T_AlternativePhoneNumber,T_EmailID,T_AddressID,T_PhotoDocID,T_AudioDocID,T_VideoDocID,T_PhotoWithSelfieDocID,T_VerificationNotes,CreatedBy,CreatedDate,LastModifiedBy,LastModifiedDate)
    VALUES
    (
        ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?
    )`;
    console.log("insert log" +req.body);
    //added result 
    mysqlConnection.query(sql, [emp.ID,emp.CaseID,emp.ThirdpartyName,emp.T_PhoneNumber,emp.T_AlternativePhoneNumber,emp.T_EmailID,emp.T_AddressID,emp.T_PhotoDocID,emp.T_AudioDocID,emp.T_VideoDocID,emp.T_PhotoWithSelfieDocID,emp.T_VerificationNotes,emp.CreatedBy,emp.CreatedDate,emp.LastModifiedBy,emp.LastModifiedDate,], (err,result)=>{
        
        if(!err)
        {
            console.log("inserted ... " + result.insertId);
            res.json(result);
        }
        else
        {
            console.log(err);
            res.json(err);

        }
    });
});

//delete

app.delete('/thirdpartydetails/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM thirdpartydetails WHERE ID = ?',[req.params.id],(err, rows, fields)=>{
        
        if(!err){
            console.log('hello world');
            res.send(JSON.stringify({ msg: 'Deleted.....' }));
         }
        else 
            {
        console.log(err);
            }
    })
});


//Update postjobs id 
app.put('/thirdpartydetails',jsonParser,(req,res)=> {
    let emp = req.body;
    var sql = 'UPDATE caseverificationdb.thirdpartydetails SET CaseID=?, InsurerName=?, PhoneNumber=?, AlternativePhoneNumber=?, EmailID=?, AddressID=?, PhotoDocID=?, AudioDocID=?, VideoDocID=?, PhotoWithSelfieDocID=?, VerificationNotes=?, CreatedBy=?, CreatedDate=?, LastModifiedBy=?, LastModifiedDate=?  WHERE ID = ?';
    mysqlConnection.query(sql, [emp.CaseID,emp.InsurerName,emp.PhoneNumber,emp.AlternativePhoneNumber,emp.EmailID,emp.AddressID,emp.PhotoDocID,emp.AudioDocID,emp.VideoDocID,emp.PhotoWithSelfieDocID,emp.VerificationNotes,emp.CreatedBy,emp.CreatedDate,emp.LastModifiedBy,emp.LastModifiedDate,emp.ID],(err, result)=>{
        if(!err)
            res.json(result);
        else
        console.log(err);
    });
});


