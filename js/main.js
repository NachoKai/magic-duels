let playerHealth = 100;
let compHealth = 100;
let playerTurn = false
const c = console.log

function allowsClick() {
    if (playerTurn === false) {
        return playerTurn = true
    }
}

function notAllowsClick() {
    if (playerTurn === true) {
        return playerTurn = false
    }
}


document.getElementById('defensive').onclick = playDefensive;
document.getElementById('sneaky').onclick = playSneaky;
document.getElementById('aggressive').onclick = playAggressive;
document.getElementById('reset').onclick = resetGame;

function playDefensive() {
    document.getElementById('spells-aggressive').className = "aggressive hidden"
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
    play('Defensive');
}

function playSneaky() {
    document.getElementById('spells-aggressive').className = "aggressive hidden"
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
    play('Sneaky');
}

function playAggressive() {
    document.getElementById('spells-aggressive').className = "aggressive hidden"
    document.getElementById('spells-defensive').className = "defensive hidden"
    document.getElementById('spells-sneaky').className = "sneaky hidden"
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
            document.getElementById('winner').innerHTML = "🟡 It's a tie! 😮 🟡";
        } else if (compChoice == 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟡 Computer wins! 😞 🟦";
            compHealth--;
        } else if (compChoice == 'Aggressive') {
            document.getElementById('spells-defensive').className = "defensive"
            document.getElementById('spells-sneaky').className = "sneaky hidden"
            document.getElementById('spells-aggressive').className = "aggressive hidden"
            document.getElementById('winner').innerHTML = "🟡 You win! 😀 🔺";
            playerHealth--;
        }

    } else if (userPlay == 'Sneaky') {
        if (compChoice == 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟦 It's a tie! 😮 🟦";
        } else if (compChoice == 'Defensive') {
            document.getElementById('spells-defensive').className = "defensive hidden"
            document.getElementById('spells-sneaky').className = "sneaky"
            document.getElementById('spells-aggressive').className = "aggressive hidden"
            document.getElementById('winner').innerHTML = "🟦 You win! 😀 🟡";
            playerHealth--;
        } else if (compChoice == 'Aggressive') {
            document.getElementById('winner').innerHTML = "🟦 Computer wins! 😞 🔺";
            compHealth--;
        }
    } else if (userPlay == 'Aggressive') {
        if (compChoice == 'Aggressive') {
            document.getElementById('winner').innerHTML = "🔺 It's a tie! 😮 🔺";
        } else if (compChoice == 'Defensive') {
            document.getElementById('winner').innerHTML = "🔺 Computer wins! 😞 🟡";
            compHealth--;
        } else if (compChoice == 'Sneaky') {
            document.getElementById('spells-defensive').className = "defensive hidden"
            document.getElementById('spells-sneaky').className = "sneaky hidden"
            document.getElementById('spells-aggressive').className = "aggressive"
            document.getElementById('winner').innerHTML = "🔺 You win! 😀 🟦";
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

    if (compHealth <= 0) {
        document.querySelector("#gamebox").className = "gameVictory"
        document.getElementById('winner').innerText = "Congratulations, you won the game! 👍";
        document.getElementById('defensive').onclick = '';
        document.getElementById('sneaky').onclick = '';
        document.getElementById('aggressive').onclick = '';
    }
}

function gameOver() {
    document.getElementById('compHealth').value = compHealth;

    if (playerHealth <= 0) {
        document.querySelector("#gamebox").className = "gameOver"
        document.getElementById('winner').innerText = "You lost the game! 👎";
        document.getElementById('defensive').onclick = '';
        document.getElementById('sneaky').onclick = '';
        document.getElementById('aggressive').onclick = '';
    }

}

/* Spells */

function expelliarmus() {
    /* -10dmg / chance stun 1 turn*/
    compHealth = compHealth - 10
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function incendio() {
    /* -5dmg / chance -10dmg 2 turns*/
    let incendio = document.getElementById('incendio')
    compHealth = compHealth - 5
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function depulso() {
    /* -17dmg*/
    let depulso = document.getElementById('depulso')
    compHealth = compHealth - 17
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function confringo() {
    /* -5dmg / chance stun 2 turns*/
    let confringo = document.getElementById('confringo')
    compHealth = compHealth - 5
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function rictusempra() {
    /* -10dmg / chance stun 1 turn*/
    let rictusempra = document.getElementById('rictusempra')
    compHealth = compHealth - 10
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function flipendo() {
    /* -15dmg */
    let flipendo = document.getElementById('flipendo')
    compHealth = compHealth - 15
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function immobulus() {
    /* -5dmg / chance stun 2 turns*/
    let immobulus = document.getElementById('immobulus')
    compHealth = compHealth - 5
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function diffindo() {
    /* -6dmg / chance -3dmg 8 turns*/
    let diffindo = document.getElementById('diffindo')
    compHealth = compHealth - 6
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function wiggenweld() {
    /* +5heal & +6heal 2 turns */
    let wiggenweld = document.getElementById('wiggenweld')
    playerHealth = playerHealth + 5
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('spells-sneaky').className = "defensive hidden"
}

function episkey() {
    /* +10heal / chance +5heal 2 turns*/
    let episkey = document.getElementById('episkey')
    playerHealth = playerHealth + 10
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('spells-sneaky').className = "defensive hidden"
}

function petrificus() {
    /* -5dmg / chance stun 2 turns*/
    let petrificus = document.getElementById('petrificus')
    compHealth = compHealth - 5
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "defensive hidden"
}

function bombarda() {
    /* -10dmg / chance stun 1 turn & -10dmg 1 turn*/
    let bombarda = document.getElementById('bombarda')
    compHealth = compHealth - 10
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "defensive hidden"
}