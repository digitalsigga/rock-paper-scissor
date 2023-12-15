function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function playGame (playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")){
        console.log("You lost");
        console.log(computerSelection);
        console.log(playerSelection);
    } else if (playerSelection ===computerSelection) {
        console.log("It's a tie")
        console.log(computerSelection)
        console.log(playerSelection);
    } else {
        console.log("You won")
        console.log(computerSelection)
        console.log(playerSelection);
    }
    
}


const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));