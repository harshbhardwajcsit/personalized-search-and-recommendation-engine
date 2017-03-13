var express=require('express');
var mongoose=require("mongoose");
var csv = require("fast-csv");
var _ = require('underscore');
mongoose.connect("mongodb://localhost:27017/users");

var Schema=mongoose.Schema;

//schema for item-profile matrix
    
var MatrixSchema=Schema({
    Item:String,
        Student: Number,
        HomeMaker: Number,
        ItProfessional: Number,
        SalesMan: Number,
        SeniorCitizen: Number,
        Teachers: Number,
        Gamer: Number,
        Traveller: Number,
        SportsMan: Number,
        Medical: Number,
        Artist: Number,
        PhotoGrapher: Number,
        BusinessMan: Number,
        Musician: Number,
        FitnessTrainer: Number,
        JobSeekers: Number,
        Others: Number,
    
})

var userMatrix=mongoose.model('userMatrix',MatrixSchema);


csv.fromPath("matrix.csv", {headers : true})
    .on("data", function(data){
        record = new userMatrix(data);
        
        /////////save training data into database////////////
        record.save( function( err, user ){

            if(!err){
                //console.log(user);


                }

            else{
                console.log(err);}

        });
    })
    .on("end", function(){
    });


//working for summation tables



//temp varibles
var array_size;
var fStudent=0,fHomeMaker=0,fItProfessional=0,fSalesMan=0,fSeniorCitizen=0,fTeachers=0,fGamer=0,fTraveller=0,fSportsMan=0,fMedical=0,fArtist=0,fPhotoGrapher=0,fBusinessMan=0,fMusician=0,fFitneness=0 ,fJobSeekers=0,fOthers=0;
function get(options) {   //options is the reference of userprofile from index file
     
    array_size = options.category.length;
    //console.log(array_size);
    for (var count = 0; count < array_size; count++) {

        console.log(options.category[count]);
        userMatrix.findOne({Item: options.category[count]}, function(err,obj) {
            if(!err) {
                var myJsonString = JSON.stringify(obj);
                //console.log(myJsonString);
                var parsed = JSON.parse(myJsonString);

                var arr = [];

                for (var x in parsed) {
                    arr.push(parsed[x]);
                }
                if(arr.length!=0){
                    // console.log(arr);

                    fStudent = fStudent + arr[2]
                    fHomeMaker = fHomeMaker + arr[3]
                    fItProfessional = fItProfessional + arr[4]
                    fSalesMan = fSalesMan + arr[5]
                    fSeniorCitizen = fSeniorCitizen + arr[6]
                    fTeachers = fTeachers + arr[7]
                    fGamer = fGamer + arr[8]
                    fTraveller = fTraveller + arr[9]
                    fSportsMan = fSportsMan + arr[10]
                    fMedical = fMedical + arr[11]
                    fArtist = fArtist + arr[12]
                    fPhotoGrapher = fPhotoGrapher + arr[13]
                    fBusinessMan = fBusinessMan + arr[14]
                    fMusician = fMusician + arr[15]
                    fFitneness = fFitneness + arr[16]
                    fJobSeekers = fJobSeekers + arr[17]
                    fOthers = fStudent + arr[18]}
                else{}
            }
                else{console.log(err);}
        });




    }
    
    function showPredictions() {

        console.log("*******************************************************************************************************************");
        console.log(array_size);
        console.log("Student",fStudent/array_size);
        console.log("HomeMaker",fHomeMaker/array_size);
        console.log("ItProfessional",fItProfessional/array_size);
        console.log("SalesMan",fSalesMan/array_size);
        console.log("SeniorCitizen",fSeniorCitizen/array_size);
        console.log("Teacher",fTeachers/array_size);
        console.log("Gamer",fGamer/array_size);
        console.log("Traveller",fTraveller/array_size);
        console.log("SportsMan",fSportsMan/array_size);
        console.log("Medical",fMedical/array_size);
        console.log("Artist",fArtist/array_size);
        console.log("PhotoGrapher",fPhotoGrapher/array_size);
        console.log("BusinessMan",fBusinessMan/array_size);
        console.log("Musician",fMusician/array_size);
        console.log("Fitness",fFitneness/array_size);
        console.log("JobSeekers",fJobSeekers/array_size);
        console.log("Others",fOthers/array_size);
        console.log("*******************************************************************************************************************");

    }




}





module.exports.get=get;
module.exports.showPrediction=showPredictions;
