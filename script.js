console.log("Hello World");

const choices = [rock, paper, scissors];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors && computerSelection === paper)
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}