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

/* Spells */

function expelliarmus() {
    let $expelliarmus = document.getElementById('expelliarmus').innerText
    c('expelliarmus')
}

function incendio() {
    let incendio = document.getElementById('incendio')
    c('incendio')
}

function depulso() {
    let depulso = document.getElementById('depulso')
    c('depulso')
}

function confringo() {
    let confringo = document.getElementById('confringo')
    c('confringo')
}

function rictusempra() {
    let rictusempra = document.getElementById('rictusempra')
    c('rictusempra')
}

function flipendo() {
    let flipendo = document.getElementById('flipendo')
    c('flipendo')
}

function immobulus() {
    let immobulus = document.getElementById('immobulus')
    c('immobulus')
}

function diffindo() {
    let diffindo = document.getElementById('diffindo')
    c('diffindo')
}

function wiggenweld() {
    let wiggenweld = document.getElementById('wiggenweld')
    c('wiggenweld')
}

function episkey() {
    let episkey = document.getElementById('episkey')
    c('episkey')
}

function petrificus() {
    let petrificus = document.getElementById('petrificus')
    c('petrificus')
}

function bombarda() {
    let bombarda = document.getElementById('bombarda')
    c('bombarda')
}