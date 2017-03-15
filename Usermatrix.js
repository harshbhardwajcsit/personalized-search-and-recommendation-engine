var express=require('express');
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
var fStudent=[],fHomeMaker=[],fItProfessional=[],fSalesMan=[],fSeniorCitizen=[],fTeachers=[],fGamer=[],fTraveller=[],fSportsMan=[],fMedical=[],fArtist=[],fPhotoGrapher=[],fBusinessMan=[],fMusician=[],fFitneness=[] ,fJobSeekers=[],fOthers=[];
function get(options) {   //options is the reference of userprofile from index file

    array_size = options.category.length;
    //console.log(array_size);
    for (var count = 0; count < array_size; count++) {

        //console.log(options.category[count]);
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

                    // console.log(options.category);
                    // SUMMATION ALGORITHM
                    console.log("*******************************************************************************************************************")
                    console.log(options.category);
                    console.log(" ");

                    fStudent.push(arr[2]);
                    console.log("Student",fStudent);
                    //console.log("Student",math.sum(fStudent)/fStudent.length);


                    fHomeMaker.push(arr[3]);
                    console.log("fHomeMaker",fHomeMaker);
                    //console.log("fHomeMaker",math.sum(fHomeMaker)/fHomeMaker.length);


                    fItProfessional.push(arr[4]);
                    console.log("fItProfessional",fItProfessional);
                    //console.log("fItProfessional",math.sum(fItProfessional)/fItProfessional.length);

                    fSalesMan.push(arr[5]);
                    console.log("SalesMan",fSalesMan);
                    //console.log("SalesMan",math.sum(fSalesMan)/fSalesMan.length);

                    fSeniorCitizen.push(arr[6]);
                    console.log("SeniorCitizen",fSeniorCitizen);
                    //console.log("SeniorCitizen",math.sum(fSeniorCitizen)/fSeniorCitizen.length);

                    fTeachers.push(arr[7])
                    console.log("Teacher",fTeachers);
                    //console.log("Teachers",math.sum(fTeachers)/fTeachers.length);

                    fGamer.push(arr[8])
                    console.log("Gamer",fGamer);
                    //console.log("Gamer",math.sum(fGamer)/fGamer.length);

                    fTraveller.push(arr[9])
                    console.log("Traveller",fTraveller);
                    //console.lconsole.log("Traveller",math.sum(fTraveller)/fTraveller.length);og("Traveller",fTraveller);
                    //

                    fSportsMan.push(arr[10])
                    console.log("fSportsMan",fSportsMan);
                    //console.log("SportsMan",math.sum(fSportsMan)/fSportsMan.length);

                    fMedical.push(arr[11])
                    console.log("Medical",fMedical);
                    //console.log("Medical",math.sum(fMedical)/fMedical.length);

                    fArtist.push(arr[12])
                    console.log("Artist",fArtist);
                    //console.log("Artist",math.sum(fArtist)/fArtist.length);

                    fPhotoGrapher.push(arr[13])
                    console.log("PhotoGrapher",fPhotoGrapher);
                    //console.log("PhotoGrapher",math.sum(fPhotoGrapher)/fPhotoGrapher.length);

                    fBusinessMan .push(arr[14])
                    console.log("BusinessMan",fBusinessMan);
                    //console.log("BusinessMan",math.sum(fBusinessMan)/fBusinessMan.length);

                    fMusician.push(arr[15])
                    console.log("Musician",fMusician);
                    //console.log("Musician",math.sum(fMusician)/fMusician.length);

                    fFitneness.push(arr[16])
                    console.log("Fitness",fFitneness);
                    //console.log("Fitness",math.sum(fFitneness)/fFitneness.length);

                    fJobSeekers.push(arr[17])
                    console.log("fJobSeekers",fJobSeekers);
                    //console.log("JobSeekers",math.sum(fJobSeekers)/fJobSeekers.length);

                    fOthers.push(arr[18])
                    console.log("Other",fOthers);
                    //console.log("Others",math.sum(fOthers)/fOthers.length);
                }
                else{}
            }
                else{console.log(err);}
        });




    }
      console.log(fStudent);
    fStudent.length=0;  fHomeMaker.length=0;fItProfessional.length=0;fSalesMan.length=0;fTeachers.length=0; fGamer.length=0;fTraveller.length=0;fSportsMan.length=0; fSeniorCitizen.length=0;
    fMedical.length=0;   fArtist.length=0; fPhotoGrapher.length=0;  fBusinessMan.length=0; fMusician.length=0;  fFitneness.length=0; fJobSeekers.length=0; fOthers.length=0;
    /*
    console.log("*******************************************************************************************************************")
    console.log("Student",math.sum(fStudent)/fStudent.length);
    fStudent.length=0;

    console.log("fHomeMaker",math.sum(fHomeMaker)/fHomeMaker.length);
     fStudent.length=0;

    console.log("fItProfessional",math.sum(fItProfessional)/fItProfessional.length);
    fItProfessional.length=0

    console.log("SalesMan",math.sum(fSalesMan)/fSalesMan.length);
    fSalesMan.length=0

    console.log("Teachers",math.sum(fTeachers)/fTeachers.length);
    fTeachers.length=0

    console.log("Gamer",math.sum(fGamer)/fGamer.length);
    fGamer.length=0

    console.log("Traveller",math.sum(fTraveller)/fTraveller.length);
    fTraveller.length=0

    console.log("SportsMan",math.sum(fSportsMan)/fSportsMan.length);
    fSportsMan.length=0

    console.log("Medical",math.sum(fMedical)/fMedical.length);
    fMedical.length=0

    console.log("Artist",math.sum(fArtist)/fArtist.length);
    fArtist.length=0


    console.log("PhotoGrapher",math.sum(fPhotoGrapher)/fPhotoGrapher.length);
    fPhotoGrapher.length=0

    console.log("BusinessMan",math.sum(fBusinessMan)/fBusinessMan.length);
    fBusinessMan.length=0


    console.log("Musician",math.sum(fMusician)/fMusician.length);
    fMusician.length=0

    console.log("Fitness",math.sum(fFitneness)/fFitneness.length);
    fFitneness.length=0

    console.log("JobSeekers",math.sum(fJobSeekers)/fJobSeekers.length);
    fJobSeekers.length=0


    console.log("Others",math.sum(fOthers)/fOthers.length);
    fOthers.length=0


*/
return fStudent;
}





module.exports.get=get;
//module.exports.showPrediction=showPredictions;
