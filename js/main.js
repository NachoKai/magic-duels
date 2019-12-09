/* 
ToDo : Funcion Stun que, si la chance se cumple, bloquee la accion del usuario o la computadora por X cantidad de turnos, depende el hechizo.
*/


let playerstamina = 100;
let compstamina = 100;
let playerTurn = false
let defensiveBtn = document.getElementById('defensive')
let sneakyBtn = document.getElementById('sneaky')
let aggressiveBtn = document.getElementById('aggressive')
let resetBtn = document.getElementById('reset')
let instructions = document.getElementById('instructions')
let aggressiveSpells = document.getElementById('spells-aggressive')
let defensiveSpells = document.getElementById('spells-defensive')
let sneakySpells = document.getElementById('spells-sneaky')
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

defensiveBtn.onclick = playDefensive;
sneakyBtn.onclick = playSneaky;
aggressiveBtn.onclick = playAggressive;
resetBtn.onclick = resetGame;

function hideSpellsTable() {
    instructions.innerHTML = ''
    aggressiveSpells.className = "aggressive hidden"
    defensiveSpells.className = "defensive hidden"
    sneakySpells.className = "sneaky hidden"
}

function playDefensive() {
    hideSpellsTable()
    play('Defensive');
}

function playSneaky() {
    hideSpellsTable()
    play('Sneaky');
}

function playAggressive() {
    hideSpellsTable()
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
            compstamina++;
            playerstamina++;
        } else if (compChoice === 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟡 Computer wins! 😞 🟦";
            playerstamina = playerstamina - 2;
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
            defensiveSpells.className = "defensive"
            sneakySpells.className = "sneaky hidden"
            aggressiveSpells.className = "aggressive hidden"
            document.getElementById('spell').innerHTML = ''
            document.getElementById('winner').innerHTML = "🟡 You win! 😀 🔺 <br> Select a spell:";
            playerstamina++;
            compstamina--;
        }

    } else if (userPlay === 'Sneaky') {
        if (compChoice === 'Sneaky') {
            document.getElementById('winner').innerHTML = "🟦 It's a tie! 😮 🟦";
            backgroundBlue()
            playerstamina--;
            compstamina--;
        } else if (compChoice === 'Defensive') {
            defensiveSpells.className = "defensive hidden"
            sneakySpells.className = "sneaky"
            aggressiveSpells.className = "aggressive hidden"
            document.getElementById('spell').innerHTML = ''
            document.getElementById('winner').innerHTML = "🟦 You win! 😀 🟡 <br> Select a spell:";
            compstamina = compstamina - 2
        } else if (compChoice === 'Aggressive') {
            document.getElementById('winner').innerHTML = "🟦 Computer wins! 😞 🔺";
            playerstamina = playerstamina - 2;
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
        } else if (compChoice === 'Defensive') {
            document.getElementById('winner').innerHTML = "🔺 Computer wins! 😞 🟡";
            playerstamina = playerstamina - 2;
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
            defensiveSpells.className = "defensive hidden"
            sneakySpells.className = "sneaky hidden"
            aggressiveSpells.className = "aggressive"
            document.getElementById('spell').innerHTML = ''
            document.getElementById('winner').innerHTML = "🔺 You win! 😀 🟦 <br> Select a spell:";
            compstamina = compstamina - 2;
        }
    }

    userMaxstamina()
    compMaxstamina()
    document.getElementById('playerstamina').innerHTML = playerstamina;
    document.getElementById('compstamina').innerHTML = compstamina;
};

function resetGame() {
    instructions.innerHTML = `Instructions:<br>
    🔺 Aggressive surpasses Sneaky 🟦<br>
    🟦 Sneaky dodge Defensive 🟡<br>
    🟡 Defensive protect Aggressive 🔺<br>`
    playerstamina = 100;
    compstamina = 100;
    document.querySelector("#gamebox").className = "gamebox"
    document.getElementById('result').innerHTML = ''
    document.getElementById('winner').innerHTML = ''
    document.getElementById('spell').innerHTML = ''
    document.getElementById('playerstamina').innerHTML = playerstamina;
    document.getElementById('compstamina').innerHTML = compstamina;
    defensiveBtn.onclick = playDefensive;
    sneakyBtn.onclick = playSneaky;
    aggressiveBtn.onclick = playAggressive;
    defensiveSpells.className = "defensive hidden"
    sneakySpells.className = "sneaky hidden"
    aggressiveSpells.className = "aggressive hidden"
};

function gameVictory() {
    document.getElementById('compstamina').value = compstamina;

    if (compstamina <= 0) {
        document.getElementById('winner').innerText = msgWin()
        document.getElementById("gamebox").className = "gameVictory"
        defensiveBtn.onclick = function () {};
        sneakyBtn.onclick = function () {};
        aggressiveBtn.onclick = function () {};
    }
}

function gameOver() {
    document.getElementById('playerstamina').value = playerstamina;

    if (playerstamina <= 0) {
        document.getElementById('winner').innerText = msgLose();
        document.getElementById("gamebox").className = "gameOver"
        defensiveBtn.onclick = function () {};
        sneakyBtn.onclick = function () {};
        aggressiveBtn.onclick = function () {};
    }
}

/* Spells User */

function expelliarmus() {
    /* -10dmg / chance stun 1 turn*/
    compstamina = compstamina - 10
    chance()
    document.getElementById('spell').innerHTML = "Expelliarmus deals 10 damage! 💥";
    backgroundRed()
    document.getElementById('compstamina').innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function incendio() {
    /* -5dmg / chance -10dmg 2 turns*/
    compstamina = compstamina - 5
    chance()
    document.getElementById('spell').innerHTML = "Incendio deals 5 damage! 💥";
    backgroundRed()
    document.getElementById('compstamina').innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function depulso() {
    /* -17dmg*/
    compstamina = compstamina - 17
    chance()
    document.getElementById('spell').innerHTML = "Depulso deals 17 damage! 💥";
    backgroundRed()
    document.getElementById('compstamina').innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function confringo() {
    /* -5dmg / chance stun 2 turns*/
    compstamina = compstamina - 5
    chance()
    document.getElementById('spell').innerHTML = "Confringo deals 5 damage! 💥";
    backgroundRed()
    document.getElementById('compstamina').innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function rictusempra() {
    /* -10dmg / chance stun 1 turn*/
    compstamina = compstamina - 10
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Rictusempra deals 10 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function flipendo() {
    /* -15dmg */
    compstamina = compstamina - 15
    backgroundBlue()
    document.getElementById('spell').innerHTML = "Flipendo deals 15 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function immobulus() {
    /* -5dmg / chance stun 2 turns*/
    compstamina = compstamina - 5
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Immmobulus deals 5 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function diffindo() {
    /* -6dmg / chance -3dmg 8 turns*/
    compstamina = compstamina - 6
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Diffindo deals 6 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function wiggenweld() {
    /* +5heal & +6heal 2 turns */
    playerstamina = playerstamina + 5
    backgroundYellow()
    document.getElementById('spell').innerHTML = "Wiggenweld Potion increases your stamina by 5 points! 💚";
    document.getElementById('playerstamina').innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function episkey() {
    /* +10heal / chance +5heal 2 turns*/
    playerstamina = playerstamina + 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Episkey increases your stamina by 10 points! 💚";
    document.getElementById('playerstamina').innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function petrificus() {
    /* -5dmg / chance stun 2 turns*/
    compstamina = compstamina - 5
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Petrificus Totalus deals 5 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

function bombarda() {
    /* -10dmg / chance stun 1 turn & -10dmg 1 turn*/
    compstamina = compstamina - 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Bombarda deals 5 damage! 💥";
    document.getElementById('compstamina').innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

/* Spells Computer */

function expelliarmusComp() {
    /* -10dmg / chance stun 1 turn*/
    playerstamina = playerstamina - 10
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Expelliarmus and deals 10 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function incendioComp() {
    /* -5dmg / chance -10dmg 2 turns*/
    playerstamina = playerstamina - 5
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Incendio and deals 5 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function depulsoComp() {
    /* -17dmg*/
    playerstamina = playerstamina - 17
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Depulso and deals 17 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function confringoComp() {
    /* -5dmg / chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundRed()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Confringo and deals 5 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function rictusempraComp() {
    /* -10dmg / chance stun 1 turn*/
    playerstamina = playerstamina - 10
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Rictusempra and deals 10 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function flipendoComp() {
    /* -15dmg */
    playerstamina = playerstamina - 15
    backgroundBlue()
    document.getElementById('spell').innerHTML = "Computer used Flipendo and deals 15 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function immobulusComp() {
    /* -5dmg / chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Immmobulus and deals 5 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function diffindoComp() {
    /* -6dmg / chance -3dmg 8 turns*/
    playerstamina = playerstamina - 6
    backgroundBlue()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Diffindo and deals 6 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function wiggenweldComp() {
    /* +5heal & +6heal 2 turns */
    compstamina = compstamina + 5
    backgroundYellow()
    document.getElementById('spell').innerHTML = "Computer used Wiggenweld Potion and increases stamina by 5 points! 🟢";
    document.getElementById('compstamina').innerHTML = compstamina;
    userMaxstamina()
}

function episkeyComp() {
    /* +10heal / chance +5heal 2 turns*/
    compstamina = compstamina + 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Episkey and increases stamina by 10 points! 🟢";
    document.getElementById('compstamina').innerHTML = compstamina;
    userMaxstamina()
}

function petrificusComp() {
    /* -5dmg / chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Petrificus Totalus and deals 5 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

function bombardaComp() {
    /* -10dmg / chance stun 1 turn & -10dmg 1 turn*/
    playerstamina = playerstamina - 10
    backgroundYellow()
    chance()
    document.getElementById('spell').innerHTML = "Computer used Bombarda and deals 5 damage! 💥";
    document.getElementById('playerstamina').innerHTML = playerstamina;
}

/* Function no more than 100 stamina points*/

function userMaxstamina() {
    document.getElementById('playerstamina').innerHTML = playerstamina;
    if (playerstamina > 100) {
        playerstamina = 100
    }
}

function compMaxstamina() {
    document.getElementById('compstamina').innerHTML = compstamina;
    if (compstamina > 100) {
        compstamina = 100
    }
}

compMaxstamina()

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

/* Messages */

function msgWin() {
    Swal.fire(
        'Good job!',
        'Congratulations, you won the duel! 👍',
        'success'
    )
}

function msgLose() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You lost the duel! 👎'
    })
}