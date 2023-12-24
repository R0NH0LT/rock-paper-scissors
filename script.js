// This is the choices below
const rock = document.querySelector('#rock-container');
const paper = document.querySelector('#paper-container');
const scissors = document.querySelector('#scissors-container');
const choicesArray = ['rock', 'paper', 'scissors'];
// these are the score displays
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundNumber = document.querySelector('#round');
const roundCounter = document.querySelector('#roundCounter');
// the start game button, and the overlay, and the game over
const playButton = document.querySelector('#playButton');
const overlay = document.querySelector('.overlay');
const gamePrompt = document.querySelector('#gamePrompt');
const gameOver = document.querySelector('#gameOver');
const resetButton = document.querySelector('#resetButton');


let playerScoreValue = 0;
let computerScoreValue = 0;
let roundValue = 1;

// here is the javascript for the start game button and overlay 
function startGame() {
    playButton.style.display = 'none';
    overlay.style.display = 'none';
    roundCounter.style.display = 'block';
    gamePrompt.style.display = 'block';

    setTimeout(() => {
        gamePrompt.style.display = 'none';
    }, 2000);
}
playButton.addEventListener('click', startGame);
// here ends the javascript for the start game button and overlay

function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    return choicesArray[random];
}
console.log(computerPlay());

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScoreValue++;// Update player score display
        return 'You win!';
    } else {
        computerScoreValue++; // Update computer score display
        return 'You lose!';
    }
}

function updateScore() {
    playerScoreDisplay.textContent = playerScoreValue;
    computerScoreDisplay.textContent = computerScoreValue;
}

function updateRound() {
    if (roundValue < 5) {
        roundValue++;
    } else {
        if (playerScoreValue > computerScoreValue) {
            gamePrompt.textContent = 'You win!';
            gameOver.style.display = 'block';
            resetButton.style.display = 'block';
            roundCounter.style.display = 'none';
        } else if (playerScoreValue < computerScoreValue) {
            gamePrompt.textContent = 'You lose!';
            gameOver.style.display = 'block';
            resetButton.style.display = 'block';
            roundCounter.style.display = 'none';
        } else {
            gamePrompt.textContent = 'It\'s a tie!';
            gameOver.style.display = 'block';
            resetButton.style.display = 'block';
            roundCounter.style.display = 'none';
        }
        computerPlay();
    }
}

function resetGame() {
    playerScoreValue = 0;
    computerScoreValue = 0;
    round = 1;
    playerScoreDisplay.textContent = playerScoreValue;
    computerScoreDisplay.textContent = computerScoreValue;
    resetButton.style.display = 'none';
    roundCounter.style.display = 'block';
    gameOver.style.display = 'none';
    gamePrompt.style.display = 'block';

    setTimeout(() => {
        gamePrompt.style.display = 'none';
    }, 2000);
}

rock.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('rock', computerChoice);
    gamePrompt.textContent = result;
    updateScore();
    updateRound();
})
paper.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('paper', computerChoice);
    gamePrompt.textContent = result;
    updateScore();
    updateRound();
})
scissors.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('scissors', computerChoice);
    gamePrompt.textContent = result;
    updateScore();
    updateRound();
})

resetButton.addEventListener('click', resetGame);