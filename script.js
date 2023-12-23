// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');
// const choices = [rock, paper, scissors];
const choices = document.querySelectorAll('.clickableDiv');
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');

let playerScoreValue = 0;
let computerScoreValue = 0;
let round = 1;

// here is the javascript for the start game button and overlay 
const playButton = document.querySelector('#playButton');
const overlay = document.querySelector('.overlay');
const startGameText = document.querySelector('#startGame');
function startGame() {
    playButton.style.display = 'none';
    overlay.style.display = 'none';
    startGameText.style.display = 'block';
}
playButton.addEventListener('click', startGame);
// here ends the javascript for the start game button and overlay

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) { 
        playerScoreValue++;
        return 'You Win!';
    } else {
        computerScoreValue++;
        return 'You Lose!';
    }
}

function updateScores() {
    playerScoreDisplay.textContent = playerScoreValue;
    computerScoreDisplay.textContent = computerScoreValue;
}

function resetScores() {
    playerScoreValue = 0;
    computerScoreValue = 0;
    round = 1;
    updateScores();
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = computerPlay().id;
        const result = playRound(playerChoice, computerChoice);
        
        updateRoundResult(result);
        updateScores();

        if (round < 5) {
            round++;
            roundNumber.textContent = round;
        } else {
            if (playerScoreValue > computerScoreValue) {
                updateRoundResult('You Win');
            } else if (playerScoreValue < computerScoreValue) {
                updateRoundResult('You Lose');
            } else {
                updateRoundResult('Game Tied!');
            }
            resetScores();
        }
        
        updateScores();
    })
})
