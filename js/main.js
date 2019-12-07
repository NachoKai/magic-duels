/* 
ToDo : Funcion Stun que, si la chance se cumple, bloquee la accion del usuario o la computadora por X cantidad de turnos, depende el hechizo.
*/


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

function getCompChoiceSpell() {
    let choiceSpell = ['1', '2', '3', '4'];
    let compChooseSpell = choiceSpell[Math.floor(Math.random() * choiceSpell.length)];
    return compChooseSpell;
}

function play(userPlay) {

    let compChoice = getCompChoice();
    let compChoiceSpell = getCompChoiceSpell()
    document.getElementById('result').innerHTML = `You: ${userPlay} ⚡ Computer: ${compChoice}`

    if (userPlay === 'Defensive') {
        if (compChoice === 'Defensive') {
            document.getElementById('winner').innerHTML = "🟡 It's a tie! 😮 🟡";
            backgroundYellow()
            compHealth++;
            playerHealth++;
            backgroundYellow()
        } else if (compChoice === 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟡 Computer wins! 😞 🟦";
            playerHealth = playerHealth - 2;
            if (compChoiceSpell === '1') {
                rictusempraComp()
            } else if (compChoiceSpell === '2') {
                flipendoComp()
            } else if (compChoiceSpell === '3') {
                immobulusComp()
            } else if (compChoiceSpell === '4') {
                diffindoComp()
            }
        } else if (compChoice === 'Aggressive') {
            document.getElementById('spells-defensive').className = "defensive"
            document.getElementById('spells-sneaky').className = "sneaky hidden"
            document.getElementById('spells-aggressive').className = "aggressive hidden"
            document.getElementById('winner').innerHTML = "🟡 You win! 😀 🔺";
            playerHealth++;
            compHealth--;
        }

    } else if (userPlay === 'Sneaky') {
        if (compChoice === 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟦 It's a tie! 😮 🟦";
            backgroundBlue()
            playerHealth--;
            compHealth--;
            backgroundBlue()
        } else if (compChoice === 'Defensive') {
            document.getElementById('spells-defensive').className = "defensive hidden"
            document.getElementById('spells-sneaky').className = "sneaky"
            document.getElementById('spells-aggressive').className = "aggressive hidden"
            document.getElementById('winner').innerHTML = "🟦 You win! 😀 🟡";
            compHealth = compHealth - 2
        } else if (compChoice === 'Aggressive') {
            document.getElementById('winner').innerHTML = "🟦 Computer wins! 😞 🔺";
            playerHealth = playerHealth - 2;
            if (compChoiceSpell === '1') {
                expelliarmusComp()
            } else if (compChoiceSpell === '2') {
                incendioComp()
            } else if (compChoiceSpell === '3') {
                depulsoComp()
            } else if (compChoiceSpell === '4') {
                confringoComp()
            }
        }
    } else if (userPlay === 'Aggressive') {
        if (compChoice === 'Aggressive') {
            document.getElementById('winner').innerHTML = "🔺 It's a tie! 😮 🔺";
            backgroundRed()
            backgroundRed()
        } else if (compChoice === 'Defensive') {
            document.getElementById('winner').innerHTML = "🔺 Computer wins! 😞 🟡";
            playerHealth = playerHealth - 2;
            if (compChoiceSpell === '1') {
                wiggenweldComp()
            } else if (compChoiceSpell === '2') {
                episkeyComp()
            } else if (compChoiceSpell === '3') {
                petrificusComp()
            } else if (compChoiceSpell === '4') {
                bombardaComp()
            }
        } else if (compChoice === 'Sneaky') {
            document.getElementById('spells-defensive').className = "defensive hidden"
            document.getElementById('spells-sneaky').className = "sneaky hidden"
            document.getElementById('spells-aggressive').className = "aggressive"
            document.getElementById('winner').innerHTML = "🔺 You win! 😀 🟦";
            compHealth = compHealth - 2;
        }
    }

    userMaxHealth()
    compMaxHealth()
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('compHealth').innerHTML = compHealth;
};

function resetGame() {
    playerHealth = 100;
    compHealth = 100;
    document.querySelector("#gamebox").className = "gamebox"
    document.getElementById('result').innerHTML = ''
    document.getElementById('winner').innerHTML = ''
    document.getElementById('spell').innerHTML = ''
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
    document.getElementById('compHealth').value = compHealth;

    if (compHealth <= 0) {
        document.getElementById('winner').innerText = "Congratulations, you won the duel! 👍";
        document.getElementById("gamebox").className = "gameVictory"
        document.getElementById('defensive').onclick = function () {};
        document.getElementById('sneaky').onclick = function () {};
        document.getElementById('aggressive').onclick = function () {};
    }
}

function gameOver() {
    document.getElementById('playerHealth').value = playerHealth;

    if (playerHealth <= 0) {
        document.getElementById('winner').innerText = "You lost the duel! 👎";
        document.getElementById("gamebox").className = "gameOver"
        document.getElementById('defensive').onclick = function () {};
        document.getElementById('sneaky').onclick = function () {};
        document.getElementById('aggressive').onclick = function () {};
    }
}

/* Spells User */

function expelliarmus() {
    /* -10dmg / chance stun 1 turn*/
    compHealth = compHealth - 10
    chance()
    document.getElementById('spell').innerHTML = "Expelliarmus deals 10 damage! 💥";
    backgroundRed()
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function incendio() {
    /* -5dmg / chance -10dmg 2 turns*/
    compHealth = compHealth - 5
    chance()
    document.getElementById('spell').innerHTML = "Incendio deals 5 damage! 💥";
    backgroundRed()
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function depulso() {
    /* -17dmg*/
    compHealth = compHealth - 17
    chance()
    document.getElementById('spell').innerHTML = "Depulso deals 17 damage! 💥";
    backgroundRed()
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function confringo() {
    /* -5dmg / chance stun 2 turns*/
    compHealth = compHealth - 5
    chance()
    document.getElementById('spell').innerHTML = "Confringo deals 5 damage! 💥";
    backgroundRed()
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-aggressive').className = "aggressive hidden"
}

function rictusempra() {
    /* -10dmg / chance stun 1 turn*/
    compHealth = compHealth - 10
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Rictusempra deals 10 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function flipendo() {
    /* -15dmg */
    compHealth = compHealth - 15
    backgroundBlue()
    document.getElementById('spell').innerHTML = "Flipendo deals 15 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function immobulus() {
    /* -5dmg / chance stun 2 turns*/
    compHealth = compHealth - 5
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Immmobulus deals 5 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function diffindo() {
    /* -6dmg / chance -3dmg 8 turns*/
    compHealth = compHealth - 6
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Diffindo deals 6 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-sneaky').className = "sneaky hidden"
}

function wiggenweld() {
    /* +5heal & +6heal 2 turns */
    playerHealth = playerHealth + 5
    backgroundYellow()
    document.getElementById('spell').innerHTML = "Wiggenweld Potion increases your health by 5 points! 💚";
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('spells-defensive').className = "defensive hidden"
    userMaxHealth()
}

function episkey() {
    /* +10heal / chance +5heal 2 turns*/
    playerHealth = playerHealth + 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Episkey increases your health by 10 points! 💚";
    document.getElementById('playerHealth').innerHTML = playerHealth;
    document.getElementById('spells-defensive').className = "defensive hidden"
    userMaxHealth()
}

function petrificus() {
    /* -5dmg / chance stun 2 turns*/
    compHealth = compHealth - 5
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Petrificus Totalus deals 5 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-defensive').className = "defensive hidden"
}

function bombarda() {
    /* -10dmg / chance stun 1 turn & -10dmg 1 turn*/
    compHealth = compHealth - 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Bombarda deals 5 damage! 💥";
    document.getElementById('compHealth').innerHTML = compHealth;
    document.getElementById('spells-defensive').className = "defensive hidden"
}

/* Spells Computer */

function expelliarmusComp() {
    /* -10dmg / chance stun 1 turn*/
    playerHealth = playerHealth - 10
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Expelliarmus and deals 10 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function incendioComp() {
    /* -5dmg / chance -10dmg 2 turns*/
    playerHealth = playerHealth - 5
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Incendio and deals 5 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function depulsoComp() {
    /* -17dmg*/
    playerHealth = playerHealth - 17
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Depulso and deals 17 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function confringoComp() {
    /* -5dmg / chance stun 2 turns*/
    playerHealth = playerHealth - 5
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Confringo and deals 5 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function rictusempraComp() {
    /* -10dmg / chance stun 1 turn*/
    playerHealth = playerHealth - 10
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Rictusempra and deals 10 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function flipendoComp() {
    /* -15dmg */
    playerHealth = playerHealth - 15
    backgroundBlue()
    document.getElementById('spell').innerHTML = "Computer used Flipendo and deals 15 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function immobulusComp() {
    /* -5dmg / chance stun 2 turns*/
    playerHealth = playerHealth - 5
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Immmobulus and deals 5 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function diffindoComp() {
    /* -6dmg / chance -3dmg 8 turns*/
    playerHealth = playerHealth - 6
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Diffindo and deals 6 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function wiggenweldComp() {
    /* +5heal & +6heal 2 turns */
    compHealth = compHealth + 5
    backgroundYellow()
    document.getElementById('spell').innerHTML = "Computer used Wiggenweld Potion and increases health by 5 points! 🟢";
    document.getElementById('compHealth').innerHTML = compHealth;
    userMaxHealth()
}

function episkeyComp() {
    /* +10heal / chance +5heal 2 turns*/
    compHealth = compHealth + 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Episkey and increases health by 10 points! 🟢";
    document.getElementById('compHealth').innerHTML = compHealth;
    userMaxHealth()
}

function petrificusComp() {
    /* -5dmg / chance stun 2 turns*/
    playerHealth = playerHealth - 5
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Petrificus Totalus and deals 5 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

function bombardaComp() {
    /* -10dmg / chance stun 1 turn & -10dmg 1 turn*/
    playerHealth = playerHealth - 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Bombarda and deals 5 damage! 💥";
    document.getElementById('playerHealth').innerHTML = playerHealth;
}

/* Function no more than 100 health points*/

function userMaxHealth() {
    document.getElementById('playerHealth').innerHTML = playerHealth;
    if (playerHealth > 100) {
        playerHealth = 100
    }
}

function compMaxHealth() {
    document.getElementById('compHealth').innerHTML = compHealth;
    if (compHealth > 100) {
        compHealth = 100
    }
}

compMaxHealth()

/* Chance function */

function chance() {
    if (Math.random() <= 0.4) {
        c('Triggered!');
    } else {
        c('Failed!');
    }
}

/* Stun function */

function stun(turn) {
    let turns = 0
}

/* Change Backgrounds */

function backgroundRed() {
    setTimeout(function () {
        document.querySelector("#gamebox").className = "backgRed";
    }, 100);
    setTimeout(function () {
        document.querySelector("#gamebox").className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}

function backgroundBlue() {
    setTimeout(function () {
        document.querySelector("#gamebox").className = "backgBlue";
    }, 100);
    setTimeout(function () {
        document.querySelector("#gamebox").className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}

function backgroundYellow() {
    setTimeout(function () {
        document.querySelector("#gamebox").className = "backgYellow";
    }, 100);
    setTimeout(function () {
        document.querySelector("#gamebox").className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}