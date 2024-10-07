let player1Choice = '';
let player2Choice = '';
let gameMode = '';

function startGame(mode) {
    gameMode = mode;
    document.getElementById('modeSelection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('res').innerText = ''; // Reset result text
    document.getElementById('secondPlayer').style.display = mode === 'player' ? 'block' : 'none';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play(choice) {
    player1Choice = choice;
    if (gameMode === 'computer') {
        let compChoice = ['rock', 'paper', 'scissors'][getRandomInt(3)];
        determineWinner(player1Choice, compChoice);
    } else {
        document.getElementById('res').innerText = `Player 1 chose: ${choice}. Now, Player 2's turn.`;
    }
}

function playSecondPlayer(choice) {
    player2Choice = choice;
    determineWinner(player1Choice, player2Choice);
}

function determineWinner(choice1, choice2) {
    let result;

    if (choice1 === choice2) {
        result = "It's a tie!";
    } else if (
        (choice1 === 'rock' && choice2 === 'scissors') ||
        (choice1 === 'paper' && choice2 === 'rock') ||
        (choice1 === 'scissors' && choice2 === 'paper')
    ) {
        result = "Player 1 won!";
    } else {
        result = gameMode === 'computer' ? "Computer won!" : "Player 2 won!";
    }

    document.getElementById('res').innerText = `Player 1 chose: ${choice1}\n${gameMode === 'computer' ? 'Computer' : 'Player 2'} chose: ${choice2}\n${result}`;
    player1Choice = ''; // Reset choices for the next round
    player2Choice = '';
}
