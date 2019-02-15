var express = require('express')
var app = express()
var request = require('request')  
var path = require('path')
var mysql =require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'wndyd4065',
    database:'kisafintech'
});

db.connect();


app.get('/',function(req,res){
    
    db.query('SELECT * FROM user',function(error,result){
        console.log(result);
        res.send(result);
    })  
})


app.get('/text2',function(req,res){
    request('https://google.com',function(error,response,body){
        res.send(body);
        console.log(body);
    });
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.post('/user',function(req,res){

})

app.get('/ejs',function(req,res){
    res.render('index');
})

app.listen(3000);