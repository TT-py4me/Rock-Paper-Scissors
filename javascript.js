const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};


//play single round
const oneRoundRPS = function(computerSelection, playerSelection) {

var winner=""; 
var roundstatus="";

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


//later, use do while to replay a tie, in game function


//ensure player choice is correct. Computer choice is built to be valid

for ( let round=1; round<6; round++) {
    
    console.log(`Round ${round} \n\n`)
    console.log("Rock\nPaper\nScissors\nShoot!\n ")
    var playerSelection;
    var computerSelection;
    
   do { //get and display results of round, repeat round if there is a tie

     do{  //get valid playerSelection and get computerSelection
        console.log("(rock, paper, or scissors?)");
        playerSelection = prompt(); 
        computerSelection = getComputerChoice();
     } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")

    console.log("The computer chose " + computerSelection) 
    console.log(oneRoundRPS(computerSelection, playerSelection)) //prints results of round  

    if(oneRoundRPS(computerSelection, playerSelection) === "tie"){
        console.log(`Let's repeat round ${round}!`)
    }
   } while (oneRoundRPS(computerSelection, playerSelection) === "tie")

}






//To do: change winner (second function oneRoundRPS) in each switch to a statement like `you win/lose. ${computer/player} beats ${player/computer}` 
//also change roundstatus, maybe add  "the round is a tie!"

//changed strings from const to var so I could change strings