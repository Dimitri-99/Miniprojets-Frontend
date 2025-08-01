
const form = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userGuess = parseInt(guessInput.value);
    if (userGuess < 1 || userGuess > 100) {
        resultDiv.textContent = "Veuillez entrer un nombre entre 1 et 100.";
        return;
    }
    attempts++;
    if (userGuess === randomNumber) {
        resultDiv.textContent = `Bravo ! Vous avez deviné le nombre en ${attempts} tentative(s)`;
        resetButton.style.display = 'block';
    } else if (userGuess < randomNumber) {
        resultDiv.textContent = `Trop bas ! Essayez encore.\nTentative n°${attempts}`;
    } else {
        resultDiv.textContent = `Trop haut ! Essayez encore.\nTentative n°${attempts}`;
    }
});
                   

resetButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    resultDiv.textContent = '';
    resetButton.style.display = 'none';
    guessInput.focus();
});

