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
var bodyParser=require('body-parser')


db.connect();

app.use(express.static(path.join(__dirname,'public')));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

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

app.post('/userJoin',function(req,res){
    
    var input_name = req.body.nameajax;
    var input_phone = req.body.phoneajax;
    var input_age =   req.body.ageajax; 

    $.ajax({
        url:'http://localhost:3000/userJoin',
        type : 'POST',
        dataType : 'JSON',
        data : {
            name : input_name,
            phone : input_phone,
            age : input_age 
        },
        success : function(){
            console.log(response);
        }
    });

    db.query("INSERT INTO user (name, user_id,user_password) VALUES (?,?,?)",
    [name,phone,age],
    function(err,result){
        if(err)
        {
            console.log(err);
            throw err;
        }   
        else
            res.json('data input');
            res.send(result);     
    });
    console.log(name, phone,age);
})

app.get('/join',function(req,res){
    res.render('join');
})

app.get('/designed',function(req,res){
    res.render('designed');
})

app.get('/ejs',function(req,res){
    res.render('index');
})

app.listen(3000);