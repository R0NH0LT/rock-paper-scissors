// This is the choices below
const rock = document.querySelector('#rock-container');
const paper = document.querySelector('#paper-container');
const scissors = document.querySelector('#scissors-container');
const choicesArray = ['rock', 'paper', 'scissors'];
// these are the score displays
const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const roundNumberDisplay = document.querySelector('#roundNumber');
const roundCounter = document.querySelector('#roundCounter');
// the start game button, and the overlay, and the game over
const playButton = document.querySelector('#playButton');
const overlay = document.querySelector('.overlay');
const gamePrompt = document.querySelector('#gamePrompt');
const gameOver = document.querySelector('#gameOver');
const gameTitle = document.querySelector('#gameTitle');
const declaredWinner = document.querySelector('#declaredWinner');
const player1 = document.querySelector('#player1-container');
const computer = document.querySelector('#computer-container');
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
        roundValue++;
        updateRound();
        updateScoreBoard();
        return 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScoreValue++;// Update player score display
        roundValue++;
        updateRound();
        updateScoreBoard();
        return 'You win!';
    } else {
        computerScoreValue++; // Update computer score display
        roundValue++;
        updateRound();
        updateScoreBoard();
        return 'You lose!';
    }
}

function updateScoreBoard() {
    playerScoreDisplay.textContent = playerScoreValue;
    computerScoreDisplay.textContent = computerScoreValue;
    roundNumberDisplay.textContent = roundValue;
}

function updateRound() {
    if (roundValue < 5) {
        return;
    } else if (roundValue === 5) {
        roundValue = 1;
        endGame();
    }
}

function endGame() {
    if (playerScoreValue > computerScoreValue) {
        gameTitle.style.display = 'none';
        declaredWinner.textContent = 'You win!';
        declaredWinner.style.display = 'block';
        player1.style.color = 'green';
        computer.style.color = 'red';
        gameOver.style.display = 'block';
        resetButton.style.display = 'block';
        roundCounter.style.display = 'none';
    } else if (playerScoreValue < computerScoreValue) {
        gameTitle.style.display = 'none';
        declaredWinner.textContent = 'You lose!';
        declaredWinner.style.display = 'block';
        player1.style.color = 'red';
        computer.style.color = 'green';
        gameOver.style.display = 'block';
        resetButton.style.display = 'block';
        roundCounter.style.display = 'none';
    } else {
        gameTitle.style.display = 'none';
        declaredWinner.textContent = 'It\'s a tie!';
        declaredWinner.style.display = 'block';
        player1.style.color = 'brown';
        computer.style.color = 'brown';
        gameOver.style.display = 'block';
        resetButton.style.display = 'block';
        roundCounter.style.display = 'none';
    }{
        return;
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
    gameTitle.style.display = 'block';
    declaredWinner.style.display = 'none';
    player1.style.color = 'white';
    computer.style.color = 'white';

    setTimeout(() => {
        gamePrompt.style.display = 'none';
    }, 2000);
}

rock.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('rock', computerChoice);
})
paper.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('paper', computerChoice);
})
scissors.addEventListener('click', () => {
    const computerChoice = computerPlay();
    const result = playRound('scissors', computerChoice);
})

resetButton.addEventListener('click', resetGame);