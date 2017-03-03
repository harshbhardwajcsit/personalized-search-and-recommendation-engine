var express=require('express');
var bodyParser=require("body-parser");
var Usermatrix=require('Usermatrix');
var ejs=require('ejs');
var firebase=require('firebase');
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/users");
var Schema=mongoose.Schema;

var app=express();

app.use(bodyParser.json ());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));
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
    //var u1=new User(req.body);

    username=req.body.Email;
     var name={"name":username}

    console.log('username  '+username);

    res.render('mainpage',name);
});


//api for catching users actions

app.post("/set",function (req,res) {

    var product=req.body.product;
    var category=req.body.category;

    u.userEmail=username;

    u.category.push(product);

 


    u.save(function (err, result) {
        if(err){
            throw err;             //saving data to user collections

        }
        else
        {
            console.log(result);
            res.send(result);
        }
    });




});

var port=process.env.PORT || 3000;
app.listen(port,function (req,res) {
    console.log("server started");

})