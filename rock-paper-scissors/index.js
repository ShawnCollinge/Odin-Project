let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats rock";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors";
        } else {
            return "Draw! You both chose Rock";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beat Paper";
        } else {
            return "Draw! You both chose Paper";
        }
    } else {
        if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            return "You lose! Rock beats scissors";
        } else {
            return "Draw, You both chose scissors";
        }
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Please chose Rock, Paper, or scissors");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();

        if (choices.includes(playerSelection)) {
            console.log(playRound(playerSelection, getComputerChoice()));
        } else {
            console.log("Invalid choice");
        }
    }
}

game();