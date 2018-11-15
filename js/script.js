// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});

var userChoice= " " ;
var computerChoice= " " ;
var winner= " " ;
var randomNumber= 0;

$("#shoot").click(function(){
    var userChoice= $("#input").val();
    $("#userChoice").text(userChoice);
    
    var randomNumber= Math.random()*3.0;
    console.log(randomNumber);
    if ( randomNumber < 1){
    $("#computerChoice").text("rock");
    }
    else if (randomNumber < 2){
        $("#computerChoice").text("scissors");
    }
    else{
        $("#computerChoice").text("paper");
    }
    

});


