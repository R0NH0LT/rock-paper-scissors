const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const choices = [rock, paper, scissors];
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

let playerScoreValue = 0;
let computerScoreValue = 0;
let round = 1;
    
function handleClick(event) {

}

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    
}

