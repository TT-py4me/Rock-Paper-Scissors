const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};



const game = function(){

  console.log("game start ")                                       //div
  document.getElementById('game_start').innerHTML = "Rock\nPaper\nScissors\nShoot!\n "
  var finalwinner;
  let player_wins=0;    
  let computer_wins=0;

  var playerSelection = "";
  var computerSelection = "";

  let round=1;
  document.getElementById('round').innerHTML = "Round " + (round);

   //function for one round
   const playRound = function(computerSelection, playerSelection) {

    var winner; 
    var roundstatus;
    if(round>1) {
    document.getElementById('round').innerHTML = "Round " + (round);}
    
    if(computerSelection === "rock") { 
      
      switch(playerSelection) {                                                       
        case  "rock":
            roundstatus = "tie"
            break;
        case "paper":
            winner = "Player wins this round! Paper beats rock"
            player_wins +=1;
            break;
        case "scissors":
            winner = "Computer wins this round! Rock beats scissors."
            computer_wins +=1;
            break;
      }
    } else if(computerSelection === "paper") {
      
      switch(playerSelection) {                                                        
        case  "rock":
            winner= "Computer wins this round! Paper beats rock."
            computer_wins +=1;
            break;
        case "paper":
            roundstatus = "tie"
            break;
        case "scissors":
            winner = "Player wins this round! Scissors beats paper."
            player_wins +=1;
            break;
      }
    } else if(computerSelection === "scissors") {
    
      switch(playerSelection) {                                                        
        case  "rock":
            winner = "Player wins this round! Rock beats scissors."
            player_wins +=1;
            break;
        case "paper":
            winner = "Computer wins this round! Scissors beats paper."  
            computer_wins +=1;
            break;
        case "scissors":
            roundstatus = "tie"
            break;
      }
    }
    
    //return results
    if(roundstatus === "tie"){
      console.log(roundstatus);                                       //////div
      console.log(`Let's repeat round ${round}!`)                     /////div
      document.getElementById('roundstatus').innerHTML = "Let's repeat round " + round;  //delete when next round
      return roundstatus;
    } else {
      document.r
      console.log(`Round ${round} has finished`)                   ///move div
      round++;
      if(player_wins===5 || computer_wins===5){
          continueGame();
          return;
      }
      return winner; 
    }
 
    };
//end of single round function

//ask for player selection  //get click
const rock = document.getElementById("rock");        //must be in game()
const paper= document.getElementById("paper");
const scissors = document.getElementById("scissors");
for(let round=1; round<6; round++){   
rock.addEventListener('click', givePlayerSelection1, continueGame);
paper.addEventListener('click', givePlayerSelection2, continueGame);
scissors.addEventListener('click', givePlayerSelection3, continueGame);
}

function givePlayerSelection1 (){
    //ask for computer selection
    computerSelection = getComputerChoice();
    playerSelection = document.getElementById("rock").innerHTML.toLowerCase();
    console.log("The player has made a choice of ----------- " + playerSelection);        ////div, change to picture?
    console.log("At the same time as the player, the computer made a choice of " + computerSelection);    ////div?,change to picture?
    //console.log(playRound(computerSelection, playerSelection)); 
    document.getElementById('winner').innerHTML = playRound(computerSelection, playerSelection); 
    console.log("player current score: " + player_wins)  //testing             //div
    console.log("computer current score: " + computer_wins)//testing             //div
    document.getElementById('player_wins').innerHTML = "Player: " + player_wins;
    document.getElementById('computer_wins').innerHTML = "Computer: " + computer_wins;
    //end click
    
}
function givePlayerSelection2 (){
    //ask for computer selection
    computerSelection = getComputerChoice();
    playerSelection = document.getElementById("paper").innerHTML.toLowerCase();
    console.log("The player has made a choice of ----------- " + playerSelection); //div
    console.log("At the same time as the player, the computer made a choice of " + computerSelection); //div
    //console.log(playRound(computerSelection, playerSelection));
    document.getElementById('winner').innerHTML = playRound(computerSelection, playerSelection); //stop printing/delete div when game is over/und   
    console.log("player current score: " + player_wins)  //testing    //div
    console.log("computer current score: " + computer_wins)//testing  //div
    document.getElementById('player_wins').innerHTML = "Player: " + player_wins;
    document.getElementById('computer_wins').innerHTML = "Computer: " + computer_wins;
    
}
function givePlayerSelection3 (){
    //ask for computer selection
    computerSelection = getComputerChoice();
    playerSelection = document.getElementById("scissors").innerHTML.toLowerCase();
    console.log("The player has made a choice of ----------- " + playerSelection); //test  //div
    console.log("At the same time as the player, the computer made a choice of " + computerSelection); //test //div
    //console.log(playRound(computerSelection, playerSelection)); 
    document.getElementById('winner').innerHTML = playRound(computerSelection, playerSelection); 
    console.log("player current score: " + player_wins)  //testing    //div
    console.log("computer current score: " + computer_wins)//testing  //div
    document.getElementById('player_wins').innerHTML = "Player: " + player_wins;
    document.getElementById('computer_wins').innerHTML = "Computer: " + computer_wins;
    
}

function continueGame() {         
  if (player_wins > computer_wins){ 
      finalwinner = "player"
      console.log("This final winner is: " + finalwinner + "!")   //div
      document.getElementById('finalwinner').innerHTML = "This final winner is: " + finalwinner
  } else if (player_wins < computer_wins) {
      finalwinner = "computer"
      console.log("This final winner is: " + finalwinner + "!")   //div
      document.getElementById('finalwinner').innerHTML = "This final winner is: " + finalwinner
  }

  rock.removeEventListener('click', givePlayerSelection1, continueGame);
  paper.removeEventListener('click', givePlayerSelection2, continueGame);
  scissors.removeEventListener('click', givePlayerSelection3, continueGame);
  console.log("Game finished")   //div
  
  
  return(finalwinner); 
   
}   



};

game()





