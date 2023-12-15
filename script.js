function getComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayersChoice() {
    var value = prompt("Rock, Paper or Scissors?");
    value = value.toLowerCase();
    return value
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


const playerSelection = getPlayersChoice();
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));