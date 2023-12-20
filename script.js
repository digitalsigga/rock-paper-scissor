let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
container.appendChild(content);


function announceWinner() {
    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            console.log('You are the overall winner!');
        } else if (playerScore < computerScore) {
            console.log('The computer is the overall winner!');
        } else {
            console.log("It's a tie overall!");
        }

    }
}

function playGame(playerSelection, computerSelection) {
    
    if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")){
        console.log(computerSelection);
        console.log(playerSelection);
        content.textContent = "The winner is computer"
        computerScore += 1;
    } else if (playerSelection ===computerSelection) {
        console.log(computerSelection)
        console.log(playerSelection);
        content.textContent = "It's a tie"
    } else {
        console.log(computerSelection)
        console.log(playerSelection);
        content.textContent = "You won!";
        playerScore += 1;
    }

    roundsPlayed += 1;

    if (roundsPlayed===5) {
        announceWinner();
    }

}


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



    computerSelection = getComputerChoice();
    
    const rock= document.querySelector('#rock');
    rock.addEventListener('click', () => {
        playGame (rock.id, computerSelection);
    });
    
    const paper= document.querySelector('#paper');
    paper.addEventListener('click', () => {
        playGame (paper.id, computerSelection);
    });
    
    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        playGame (scissors.id, computerSelection);
    });





