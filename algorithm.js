var express=require('express');
var app=express();
var matrix=require('./Usermatrix');
var recor=matrix.usermatrixes;
var mongoose=require('mongoose');
mongoose.createConnection("mongodb://localhost:27017/users");

function get(options) {   //options is the reference of userprofile from index file

    var array_size = options.category.length;
    console.log(array_size);
    for (var count = 0; count < array_size; count++) {
        ApplyAlgo(options.category[count]);
    }

    }

console.log(db);

function ApplyAlgo(preferences){
    record.findById({ 'Item': preferences },'Student HomeMaker ItProfessional SalesMan SeniorCitizen Teachers Gamer Traveller SportsMan Medical Artist PhotoGrapher BusinessMan Musician FitnessTrainer JobSeekers Others', function (err, result) {
        if (err) return err;
        else{console.log("your result is",result)} // Space Ghost is a talk show host.
    })


}
//module.exports.get=get;
    */