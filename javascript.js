const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};


//play single round
const oneRoundRPS = function(computerSelection, playerSelection) {

const winner=""; 
const roundstatus="";

if(computerSelection === "rock") { //checking memory 
  
  switch(playerSelection) {
    case  "rock":
        roundstatus = "tie"
        break;
    case "paper":
        winner = "player"
        break;
    case "scissors":
        winner = "computer"
        break;
  }
} else if(computerSelection === "paper") {
  
  switch(playerSelection) {
    case  "rock":
        winner= "computer"
        break;
    case "paper":
        roundstatus = "tie"
        break;
    case "scissors":
        winner = "player"
        break;
  }
} else if(computerSelection === "scissors") {

  switch(playerSelection) {
    case  "rock":
        winner = "player"
        break;
    case "paper":
        winner = "computer"
        break;
    case "scissors":
        roundstatus = "tie"
        break;
  }
}

//return results
if(roundstatus != "tie"){
    return(winner)
}else {
    return(roundstatus)
}
 
};

/*

const player = input //dowhile loop for input add later

const computer = getComputerChoice()
//call
oneRoundRPS(computer,player) //argue function with computer and player choices

//later, use do while to replay a tie, in game function

*/


