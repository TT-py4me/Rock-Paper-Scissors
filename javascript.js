const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};





//later, use do while to replay a tie, in game function


//ensure player choice is correct. Computer choice is built to be valid
const game = function(){
  var finalwinner;
  let player_wins=0;
  let computer_wins0;

  console.log("Let's play a game of rock paper scissors. Are you in? (y/n)")
  const do_you = prompt();
  if(do_you != "y"){
    console.log("Maybe next time")
    return 0
  }



//play single round function
const oneRoundRPS = function(computerSelection, playerSelection) {

    var winner=""; 
    var roundstatus="";
    
    if(computerSelection === "rock") { //checking memory 
      
      switch(playerSelection) {
        case  "rock":
            roundstatus = "tie"
            break;
        case "paper":
            winner = "Player wins this round! Paper beats rock"
            player_wins =+1;
            break;
        case "scissors":
            winner = "Computer wins this round! Rock beats scissors."
            computer_wins =+1;
            break;
      }
    } else if(computerSelection === "paper") {
      
      switch(playerSelection) {
        case  "rock":
            winner= "Computer wins this round! Paper beats rock."
            computer_wins =+1;
            break;
        case "paper":
            roundstatus = "tie"
            break;
        case "scissors":
            winner = "Player wins this round! Scissors beats paper."
            player_wins =+1;
            break;
      }
    } else if(computerSelection === "scissors") {
    
      switch(playerSelection) {
        case  "rock":
            winner = "Player wins this round! Rock beats scissors."
            player_wins =+1;
            break;
        case "paper":
            winner = "Computer wins this round! Scissors beats paper."  //print tie
            computer_wins =+1;
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

    console.log("Computer's selection: " + computerSelection) 
    console.log(oneRoundRPS(computerSelection, playerSelection)) //prints results of round  

    if(oneRoundRPS(computerSelection, playerSelection) === "tie"){
        console.log(`Let's repeat round ${round}!`)
    }
   } while (oneRoundRPS(computerSelection, playerSelection) === "tie")

}

if (player_wins > computer_wins){
    finalwinner = "player"
} else if (player_wins < computer_wins) {
    finalwinner = "computer"
}
return(finalwinner)
};

console.log("This final winner is: " + game() + "!")







//To do: change winner (second function oneRoundRPS) in each switch to a statement like `you win/lose. ${computer/player} beats ${player/computer}` 
//also change roundstatus, maybe add  "the round is a tie!"

//changed strings from const to var so I could change strings

//next: change 2nd function, create function game()