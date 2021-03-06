//libraries include
var express=require('express');
var sleep = require('system-sleep');
var bodyParser=require("body-parser");

//var algorithm=require("./algorithm");
var mongoose=require("mongoose");
var ejs=require('ejs');
var firebase=require('firebase');
var matrixs=require('./Usermatrix');



///mongodb connections


mongoose.createConnection("mongodb://localhost:27017/users");
var Schema=mongoose.Schema;

var app=express();


//form body encoding
app.use(bodyParser.json ());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));

//front end templating libraries :: {using ejs}
app.set('views','./templates');
app.set('view engine', 'ejs');

// // public middleware for front-end
app.use(express.static("public"));





//schema for user actions within session
var userSchema=Schema({
    userEmail: {
        type: String,
        default: ''
    },
    category:  {type : Array },
})

var userE=mongoose.model('userE',userSchema);
var u=new userE();




//APi for session management
var username;
app.post("/movetomainpage",function (req,res) {


    username=req.body.Email;
    var name={"name":username}
    console.log('username  '+username);
    res.render('newproduct',name);
});


//api for catching users actions
var URL="";
app.post("/set",function (req,res) {

    var product = req.body.product;
    var category = req.body.category;
    u.userEmail = username;
    u.category.push(product);
    
    u.save(function (err, result) {
        if (err) {
            throw err;             //saving data to user collections
        }
        else {
             console.log(product)
            
 //**********************calling to functions**********************//
            
             //matrixs.get(product);   //for summation algorithm
            
               matrixs.sendToML(username,product);

        }
    });
})
//deployment on server
var port=process.env.PORT || 3002;
app.listen(port,function (req,res) {
     console.log("server started");


})