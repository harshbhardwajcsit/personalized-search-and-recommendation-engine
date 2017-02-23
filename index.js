

var express=require('express');
var bodyParser=require("body-parser");
var ejs=require('ejs');
var app=express();

app.use(bodyParser.json ());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));
app.set('views','./templates');

app.set('view engine', 'ejs');

// // public middleware for front-end
app.use(express.static("public"));

//APi for session management
app.post("/movetomainpage",function (req,res) {
    //var u1=new User(req.body);

    username=req.body.Email;
    var name={"name":username}
    //ref.child(ids).set("hello");
    console.log('username  '+username);

    res.render('mainpage',name);
});

app.post("/set",function (req,res) {

    console.log('username  '+username);

});

var port=process.env.PORT || 3000;
app.listen(port,function (req,res) {
    console.log("server started");

})