document.getElementById('quiz-form').addEventListener('submit', function(event) {
            event.preventDefault();
            let score = 0;
            const answers = {
                q1: 'c',
                q2: 'a',
                q3: 'c',
                q4: 'c',
                q5: 'a',
            };
            const formData = new FormData(event.target);
            for (const [key, value] of formData.entries()) {
                if (value === answers[key]) {
                    score++;
                }
            }
            document.getElementById('result').innerText = `Votre score est ${score} sur ${Object.keys(answers).length}.`;
        });