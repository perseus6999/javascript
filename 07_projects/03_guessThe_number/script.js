let RandomNumber = Math.round(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let playGame = true;
let numGuess = 0;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess > 100) {
        alert("Please enter a number less than 100");
    }
    else if (guess < 1) {
        alert("Please enter a number more than 1");
    }
    else {
        prevGuesses.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game over, the guessed number was ${RandomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`Congrats you guessed it right, the Random Number was ${RandomNumber}`)
    }
    else if (guess < RandomNumber) {
        displayMessage(`Guessed number is too low`);
    }
    else {
        displayMessage(`Guessed number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    NewGame(); // Call NewGame to add event listener after button is created
}

function NewGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        // Reset the game state
        RandomNumber = Math.round(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuess = 0;
        guessSlot.innerHTML = ''; // Clear guesses
        remaining.innerHTML = '10'; // Reset remaining guesses to 10
        lowOrHi.innerHTML = ''; // Clear the message
        userInput.removeAttribute('disabled');
        startOver.removeChild(p); // Remove the "Start New Game" button
        playGame = true;
    });
}
