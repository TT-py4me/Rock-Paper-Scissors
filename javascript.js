const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};



const game = function(){

  console.log("Rock\nPaper\nScissors\nShoot!\n ")
  var finalwinner;
  let player_wins=0;    
  let computer_wins=0;

  var playerSelection = "";
  var computerSelection = "";

  let round=1;

   //function for one round
   const playRound = function(computerSelection, playerSelection) {

    var winner; 
    var roundstatus; 
    
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
      console.log(roundstatus);
      console.log(`Let's repeat round ${round}!`)
      return roundstatus;
    } else {
      console.log(`Round ${round} has finished`)
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
    console.log("The player has made a choice of ----------- " + playerSelection); //test
    console.log("At the same time as the player, the computer made a choice of " + computerSelection); //test
    console.log("Between player and computer, who wins this round? \n -\n-\n-\n"); //test
    console.log(playRound(computerSelection, playerSelection)); 
    console.log("player current score: " + player_wins)  //testing
    console.log("computer current score: " + computer_wins)//testing
    //end click
    
}
function givePlayerSelection2 (){
    //ask for computer selection
    computerSelection = getComputerChoice();
    playerSelection = document.getElementById("paper").innerHTML.toLowerCase();
    console.log("The player has made a choice of ----------- " + playerSelection); //test
    console.log("At the same time as the player, the computer made a choice of " + computerSelection); //test
    console.log("Between player and computer, who wins this round? \n -\n-\n-\n"); //test
    console.log(playRound(computerSelection, playerSelection));  
    console.log("player current score: " + player_wins)  //testing
    console.log("computer current score: " + computer_wins)//testing 
    
}
function givePlayerSelection3 (){
    //ask for computer selection
    computerSelection = getComputerChoice();
    playerSelection = document.getElementById("scissors").innerHTML.toLowerCase();
    console.log("The player has made a choice of ----------- " + playerSelection); //test
    console.log("At the same time as the player, the computer made a choice of " + computerSelection); //test
    console.log("Between player and computer, who wins this round? \n -\n-\n-\n"); //test 
    console.log(playRound(computerSelection, playerSelection)); 
    console.log("player current score: " + player_wins)  //testing
    console.log("computer current score: " + computer_wins)//testing
    
}

function continueGame() {         
  if (player_wins > computer_wins){ 
      finalwinner = "player"
      console.log("This final winner is: " + finalwinner + "!")
  } else if (player_wins < computer_wins) {
      finalwinner = "computer"
      console.log("This final winner is: " + finalwinner + "!")
  }

  rock.removeEventListener('click', givePlayerSelection1, continueGame);
  paper.removeEventListener('click', givePlayerSelection2, continueGame);
  scissors.removeEventListener('click', givePlayerSelection3, continueGame);
  console.log("Game finished")
  
  return(finalwinner); 
   
}   



};

game()



