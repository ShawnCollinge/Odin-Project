var playerScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            return "You Lose! Paper beats rock";
        } else if (computerSelection === "Scissors") {
            playerScore++;
            return "You win! Rock beats Scissors";
        } else {
            return "Draw! You both chose Rock";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            computerScore++;
            return "You lose! Scissors beat Paper";
        } else {
            return "Draw! You both chose Paper";
        }
    } else {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            computerScore++;
            return "You lose! Rock beats scissors";
        } else {
            return "Draw, You both chose scissors";
        }
    }
}

function updateScore() {
    if (playerScore > 4) {
        score.innerText = `You win! You beat the computer ${playerScore} - ${computerScore}`
    } else if (computerScore > 4) {
        score.innerText = `You lost! You lost to the computer ${computerScore} - ${playerScore}`
    } else {
        score.innerText = `Player score: ${playerScore} Computer score: ${computerScore}`;
    }
}

const buttons = document.querySelectorAll("button");
let para = document.querySelector("p");
let score = document.querySelector("div");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            para.innerText = playRound(button.id, getComputerChoice());
            updateScore();
        }
    });
});
