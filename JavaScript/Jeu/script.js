const form = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

let randomNumber = Math.floor(Math.random() * 100) + 1;

form.addEventListener('submit', function(event) {event.preventDefault();
    const userGuess = parseInt(guessInput.value);
    if (userGuess < 1 || userGuess > 100) 
        {
            resultDiv.textContent = "Veuillez entrer un nombre entre 1 et 100.";
            return;
        }
        if (userGuess === randomNumber) 
            {
                resultDiv.textContent = "Bravo ! Vous avez deviné le nombre !";
                resetButton.style.display = 'block';
            }
             else if (userGuess < randomNumber) 
                {
                    resultDiv.textContent = "Trop bas ! Essayez encore.";
                }
                 else {
                    resultDiv.textContent = "Trop haut ! Essayez encore.";
                }
            });
                   
resetButton.addEventListener('click', function() 
{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = '';
    resultDiv.textContent = '';
    resetButton.style.display = 'none';
    guessInput.focus();
});