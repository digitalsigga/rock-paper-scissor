function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayersChoice() {
    let value = prompt("Rock, Paper or Scissors?");
    value = value.toLowerCase();
    return value
}

function playGame (playerSelection, computerSelection) {
    let player = 0; 
    let computer = 0;
    
    if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")){
        console.log(computerSelection);
        console.log(playerSelection);
        console.log("You lost");
        computer = computer + 1;
    } else if (playerSelection ===computerSelection) {
        console.log(computerSelection)
        console.log(playerSelection);
        console.log("It's a tie")
    } else {
        console.log(computerSelection)
        console.log(playerSelection);
        console.log("You won")
        player = player + 1;
    }

  
    
    console.log(`Player: ${player} & Computer ${computer}`);

}

function game(n) {
    for (let i = 1; i <= n; i++){
        playGame(playerSelection, computerSelection); 
        playerSelection = getPlayersChoice();
    }
    if (player > computer) {
        console.log("Player won");
    } else if (player < computer) {
        console.log("Computer won");
    } else {
        console.log("It's a tie");
    }
}

let playerSelection;
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));

game(5);