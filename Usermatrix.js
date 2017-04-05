var express=require('express');
var SetDS = require('set-ds');
var setA = new SetDS();

var math = require('mathjs');
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
var target_items=[];
var fStudent=[],fHomeMaker=[],fItProfessional=[],fSalesMan=[],fSeniorCitizen=[],fTeachers=[],fGamer=[],fTraveller=[],fSportsMan=[],fMedical=[],fArtist=[],fPhotoGrapher=[],fBusinessMan=[],fMusician=[],fFitneness=[] ,fJobSeekers=[],fOthers=[];
function get(options)
{   //options is the reference of userprofile from index file


    for (var count = 0; count < 1; count++) {

         target_items.push(options);  //storing products
         var json_object=
         userMatrix.findOne({Item: options}, function(err,obj) {
            if(!err) {
                var myJsonString = JSON.stringify(obj);
                //console.log(myJsonString);
                var parsed = JSON.parse(myJsonString);

                var arr = [];

                for (var x in parsed) {
                    arr.push(parsed[x]);
                }
                if(arr.length!=0){

                    console.log("*******************************************************************************************************************")
                    // SUMMATION ALGORITHM

                    console.log(target_items);
                    console.log(" ");

                    fStudent.push(arr[2]);
                    console.log("Student",fStudent);
                    console.log("Student",math.sum(fStudent)/fStudent.length);


                    fHomeMaker.push(arr[3]);
                    console.log("fHomeMaker",fHomeMaker);
                    console.log("fHomeMaker",math.sum(fHomeMaker)/fHomeMaker.length);


                    fItProfessional.push(arr[4]);
                    console.log("fItProfessional",fItProfessional);
                    console.log("fItProfessional",math.sum(fItProfessional)/fItProfessional.length);

                    fSalesMan.push(arr[5]);
                    console.log("SalesMan",fSalesMan);
                    console.log("SalesMan",math.sum(fSalesMan)/fSalesMan.length);

                    fSeniorCitizen.push(arr[6]);
                    console.log("SeniorCitizen",fSeniorCitizen);
                    console.log("SeniorCitizen",math.sum(fSeniorCitizen)/fSeniorCitizen.length);

                    fTeachers.push(arr[7])
                    console.log("Teacher",fTeachers);
                    console.log("Teachers",math.sum(fTeachers)/fTeachers.length);

                    fGamer.push(arr[8])
                    console.log("Gamer",fGamer);
                    console.log("Gamer",math.sum(fGamer)/fGamer.length);

                    fTraveller.push(arr[9])
                    console.log("Traveller",fTraveller);
                    console.log("Traveller",math.sum(fTraveller)/fTraveller.length);



                    fSportsMan.push(arr[10])
                    console.log("fSportsMan",fSportsMan);
                    console.log("SportsMan",math.sum(fSportsMan)/fSportsMan.length);

                    fMedical.push(arr[11])
                    console.log("Medical",fMedical);
                    console.log("Medical",math.sum(fMedical)/fMedical.length);

                    fArtist.push(arr[12])
                    console.log("Artist",fArtist);
                    console.log("Artist",math.sum(fArtist)/fArtist.length);

                    fPhotoGrapher.push(arr[13])
                    console.log("PhotoGrapher",fPhotoGrapher);
                    console.log("PhotoGrapher",math.sum(fPhotoGrapher)/fPhotoGrapher.length);

                    fBusinessMan .push(arr[14])
                    console.log("BusinessMan",fBusinessMan);
                    console.log("BusinessMan",math.sum(fBusinessMan)/fBusinessMan.length);

                    fMusician.push(arr[15])
                    console.log("Musician",fMusician);
                    console.log("Musician",math.sum(fMusician)/fMusician.length);

                    fFitneness.push(arr[16])
                    console.log("Fitness",fFitneness);
                    console.log("Fitness",math.sum(fFitneness)/fFitneness.length);

                    fJobSeekers.push(arr[17])
                    console.log("fJobSeekers",fJobSeekers);
                    console.log("JobSeekers",math.sum(fJobSeekers)/fJobSeekers.length);

                    fOthers.push(arr[18])
                    console.log("Other",fOthers);
                    console.log("Others",math.sum(fOthers)/fOthers.length);
                }
                else{}
            }
                else{console.log(err);}
        });




    }
   
}

function sendToML(options)
{
    setA.add(options);
    console.log(setA.items);


}



module.exports.sendToML=sendToML;
module.exports.get=get;
//module.exports.showPrediction=showPredictions;
