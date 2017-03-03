var express=require('express');
var mongoose=require("mongoose");
var csv = require("fast-csv");
mongoose.connect("mongodb://localhost:27017/users");

var Schema=mongoose.Schema;

//schema for item-profile matrix

var MatrixSchema=Schema({
    Item:String,
    Student:Number,
    HomeMaker:Number,
    ItProfessional:Number,
    SalesMan:Number,
    SeniorCitizen:Number,
    Teachers:Number,
	Gamer:Number,
    Traveller:Number,
    SportsMan:Number,
    Medical:Number,
    Artist:Number,
    PhotoGrapher:Number,
    BusinessMan:Number,
    Musician:Number,
    FitnessTrainer:Number,
    JobSeekers:Number,
    Others:Number,

})

var userMatrix=mongoose.model('userMatrix',MatrixSchema);
//var matrix=new userMatrix();



csv.fromPath("matrix.csv", {headers : true})

    .on("data", function(data){

        var record = new userMatrix(data);
        //console.log(data);
        record.save( function( err, user ){

            if(!err){

                //console.log('Saved');
                console.log(user);
            }

            else{

                console.log(err);

            }

        });

    })

    .on("end", function(){

        //console.log("done");

    });


