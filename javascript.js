const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};



const game = function(){

  var finalwinner;
  let player_wins=0;    
  let computer_wins=0;

  

  //for ( let round=1; round<6; round++) {  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   //function for one round
   const playRound = function(computerSelection, playerSelection) {

    var winner; 
    var roundstatus; 
    
    if(computerSelection === "rock") { //checking memory 
      
      switch(playerSelection) {                                                       ////////player selection==results of button/////////////
        case  "rock":                                                                 //maybe change "rock" "paper" and "scissors" in switch
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
      
      switch(playerSelection) {                                                         ////////player selection==results of button/////////////
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
    
      switch(playerSelection) {                                                         ////////player selection==results of button/////////////
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
//end of single round function


    
    console.log(`Round ${round} \n\n`)
    console.log("Rock\nPaper\nScissors\nShoot!\n ")
    var playerSelection;
    var computerSelection;
    
   do { //get and display results of round, repeat round if there is a tie
      
        console.log("(rock, paper, or scissors?)");
        playerSelection = prompt().toLowerCase();                                ////////player selection==results of button///////////// 
        computerSelection = getComputerChoice();

    console.log("Computer's selection: " + computerSelection) 
    console.log(playRound(computerSelection, playerSelection)) //prints results of round  

    if(playRound(computerSelection, playerSelection) === "tie"){
        console.log(`Let's repeat round ${round}!`)
    }
   } while (playRound(computerSelection, playerSelection) === "tie")

//}/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(player_wins)  //testing
console.log(computer_wins)//testing
if (player_wins > computer_wins){
    finalwinner = "player"
    console.log("This final winner is: " + finalwinner + "!")
} else if (player_wins < computer_wins) {
    finalwinner = "computer"
    console.log("This final winner is: " + finalwinner + "!")
}

return(finalwinner)
};

game()






    
    





