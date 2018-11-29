// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

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
    //$("#computerChoice").text("rock");
    computerChoice="rock";
    }
    else if (randomNumber < 2){
        //$("#computerChoice").text("scissors");
    computerChoice="scissors";
    }
    else{
        //$("#computerChoice").text("paper");
    computerChoice="paper";
    }
        $("#computerChoice").text(computerChoice);
    // console.log(`userChoice is ${userChoice}`);
    // console.log(`computerChoice is ${computerChoice}`);
    console.log(computerChoice);
if(
    (userChoice==="rock"&& computerChoice==="scissors")
||  (userChoice==="paper"&& computerChoice==="rock")
||  (userChoice==="scissors"&& computerChoice==="paper")){   
    winner="User Wins :) ";
    console.log(winner);
    $("#Result").text(winner);
}
else if(userChoice===computerChoice){
    winner="It's a Tie :|";
    $("#Result").text(winner);
}
else{
    winner="Computer Wins :("
    $("#Result").text(winner);
}
 $("#input").val(" ");
});


