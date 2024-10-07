        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        function play(userChoice) {
            const choices = ['rock', 'paper', 'scissors'];
            const compChoice = choices[getRandomInt(3)];
            let result;

            if (userChoice === compChoice) {
                result = "It's a tie!";
            } else if (
                (userChoice === 'rock' && compChoice === 'scissors') ||
                (userChoice === 'paper' && compChoice === 'rock') ||
                (userChoice === 'scissors' && compChoice === 'paper')
            ) {
                result = "You won!";
            } else {
                result = "Computer won!";
            }

            document.getElementById('res').innerText = `You chose: ${userChoice}\nComputer chose: ${compChoice}\n${result}`;
        }
   