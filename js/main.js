let playerHealth = 100;
let compHealth = 100;

document.getElementById('defensive').onclick = playDefensive;
document.getElementById('sneaky').onclick = playSneaky;
document.getElementById('aggressive').onclick = playAggressive;
document.getElementById('reset').onclick = resetGame;

function playDefensive() {
    document.getElementById('spells-defensive').className = "defensive"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
    document.getElementById('spells-aggressive').className = "aggressive hidden"
    play('Defensive');
}

function playSneaky() {
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky"
    document.getElementById('spells-aggressive').className = "aggressive hidden"
    play('Sneaky');
}

function playAggressive() {
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
    document.getElementById('spells-aggressive').className = "aggressive"
    play('Aggressive');
}

function getCompChoice() {
    let choices = ['Defensive', 'Sneaky', 'Aggressive'];
    let compChooses = choices[Math.floor(Math.random() * choices.length)];
    return compChooses;
}

function play(userPlay) {
    let compChoice = getCompChoice();
    document.getElementById('result').innerHTML = `You🧠: ${userPlay} ⚡ Computer💻: ${compChoice}`

    if (userPlay == 'Defensive') {
        if (compChoice == 'Defensive') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == 'Sneaky') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compHealth--;
        } else if (compChoice == 'Aggressive') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerHealth--;
        }

    } else if (userPlay == 'Sneaky') {
        if (compChoice == 'Sneaky') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == 'Defensive') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerHealth--;
        } else if (compChoice == 'Aggressive') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compHealth--;
        }
    } else if (userPlay == 'Aggressive') {
        if (compChoice == 'Aggressive') {
            document.getElementById('winner').innerHTML = "It's a tie! 😮";
        } else if (compChoice == 'Defensive') {
            document.getElementById('winner').innerHTML = "Computer wins! 😞";
            compHealth--;
        } else if (compChoice == 'Sneaky') {
            document.getElementById('winner').innerHTML = "You win! 😀";
            playerHealth--;
        }
    }

    gameVictory()
    gameOver()
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('compHealth').innerHTML = compHealth;
};

function resetGame() {
    playerHealth = 100;
    compHealth = 100;
    document.querySelector("#gamebox").className = "gamebox"
    document.getElementById('result').innerHTML = ''
    document.getElementById('winner').innerHTML = ''
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('defensive').onclick = playDefensive;
    document.getElementById('sneaky').onclick = playSneaky;
    document.getElementById('aggressive').onclick = playAggressive;
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
    document.getElementById('spells-aggressive').className = "aggressive hidden"
};

function gameVictory() {
    document.getElementById('playerHealth').value = playerHealth;

    if (compHealth === 0) {
        document.querySelector("#gamebox").className = "gameVictory"
        document.getElementById('winner').innerText = "Congratulations, you won the game! 👍";
        document.getElementById('defensive').onclick = '';
        document.getElementById('sneaky').onclick = '';
        document.getElementById('aggressive').onclick = '';
    }
}

function gameOver() {
    document.getElementById('compHealth').value = compHealth;

    if (playerHealth === 0) {
        document.querySelector("#gamebox").className = "gameOver"
        document.getElementById('winner').innerText = "You lost the game! 👎";
        document.getElementById('defensive').onclick = '';
        document.getElementById('sneaky').onclick = '';
        document.getElementById('aggressive').onclick = '';
    }

}