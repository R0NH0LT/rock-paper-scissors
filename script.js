const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choices = [rock, paper, scissors];
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let playerScoreValue = 0;
let computerScoreValue = 0;
let round = 1;

// here is the javascript for the start game button and overlay 
const playButton = document.querySelector('#playButton');
const overlay = document.querySelector('.overlay');
function startGame() {
    playButton.style.display = 'none';
    overlay.style.display = 'none';
}
playButton.addEventListener('click', startGame);
// here ends the javascript for the start game button and overlay

function handleClick(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    if (result === 'You Win!') {
        playerScoreValue++;
    } else if (result === 'You Lose!') {
        computerScoreValue++;
    }
}

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function updateScore() {
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        return 'You Win!';
    } else {
        return 'You Lose!';
    }
}
