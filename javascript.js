const getComputerChoice = function(){

const choices = ["rock", "paper","scissors"] 
    
let answer_index = Math.floor(Math.random() * 3); //returns random integer, 0<= answer_index <=2 
const answer = choices[answer_index]

return(answer)
};

console.log(getComputerChoice()) //test function
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice()) 
console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice()) 
console.log(getComputerChoice())
console.log(getComputerChoice())




