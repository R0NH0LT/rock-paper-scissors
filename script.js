console.log("Rock Paper Scissors");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const choices = [rock, paper, scissors];

// below is where the player and computer make their choices

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function getPlayerChoice() {
    return prompt("Choose rock, paper, or scissors");
}

// below is where the player and computer's choices are saved to variables here

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// below here is where the round is run

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

// below is where the results of the games are displayed in the console for now

console.log(playRound(playerSelection, computerSelection));
console.log('Computer: ' + computerSelection);
console.log('Player: ' + playerSelection);

// below is where the overall score is kept track of

const playerScore = 0;
const computerScore = 0;

function game(playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());
