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
let result = document.getElementById('result')
let winner = document.getElementById('winner')
let spell = document.getElementById('spell')
let gamebox = document.getElementById("gamebox")
let pStamina = document.getElementById('playerstamina')
let cStamina = document.getElementById('compstamina')
let $chance = false
const c = console.log

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
    result.innerHTML = `You: ${userPlay} ⚡ Computer: ${compChoice}`

    if (userPlay === 'Defensive') {
        if (compChoice === 'Defensive') {
            winner.innerHTML = "🟡 It's a tie! 😮 🟡";
            spell.innerHTML = ''
            backgroundYellow()
            compstamina++;
            playerstamina++;
        } else if (compChoice === 'Sneaky') {
            winner.innerHTML = "🟡 Computer wins! 😞 🟦";
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
            spell.innerHTML = ''
            winner.innerHTML = "🟡 You win! 😀 🔺 <br> Select a spell:";
            playerstamina++;
            compstamina--;
        }

    } else if (userPlay === 'Sneaky') {
        if (compChoice === 'Sneaky') {
            winner.innerHTML = "🟦 It's a tie! 😮 🟦";
            spell.innerHTML = ''
            backgroundBlue()
            playerstamina--;
            compstamina--;
        } else if (compChoice === 'Defensive') {
            defensiveSpells.className = "defensive hidden"
            sneakySpells.className = "sneaky"
            aggressiveSpells.className = "aggressive hidden"
            spell.innerHTML = ''
            winner.innerHTML = "🟦 You win! 😀 🟡 <br> Select a spell:";
            compstamina = compstamina - 2
        } else if (compChoice === 'Aggressive') {
            winner.innerHTML = "🟦 Computer wins! 😞 🔺";
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
            winner.innerHTML = "🔺 It's a tie! 😮 🔺";
            spell.innerHTML = ''
            backgroundRed()
        } else if (compChoice === 'Defensive') {
            winner.innerHTML = "🔺 Computer wins! 😞 🟡";
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
            spell.innerHTML = ''
            winner.innerHTML = "🔺 You win! 😀 🟦 <br> Select a spell:";
            compstamina = compstamina - 2;
        }
    }

    userMaxstamina()
    compMaxstamina()
    pStamina.innerHTML = playerstamina;
    cStamina.innerHTML = compstamina;
};

function resetGame() {
    instructions.innerHTML = `Instructions:<br>
    🔺 Aggressive surpasses Sneaky 🟦<br>
    🟦 Sneaky dodge Defensive 🟡<br>
    🟡 Defensive protect Aggressive 🔺<br>`
    playerstamina = 100;
    compstamina = 100;
    gamebox.className = "gamebox"
    result.innerHTML = ''
    winner.innerHTML = ''
    spell.innerHTML = ''
    pStamina.innerHTML = playerstamina;
    cStamina.innerHTML = compstamina;
    defensiveBtn.onclick = playDefensive;
    sneakyBtn.onclick = playSneaky;
    aggressiveBtn.onclick = playAggressive;
    defensiveSpells.className = "defensive hidden"
    sneakySpells.className = "sneaky hidden"
    aggressiveSpells.className = "aggressive hidden"
};

function gameVictory() {
    cStamina.value = compstamina;

    if (compstamina <= 0) {
        winner.innerText = msgWin()
        gamebox.className = "gameVictory"
        defensiveBtn.onclick = function () {};
        sneakyBtn.onclick = function () {};
        aggressiveBtn.onclick = function () {};
    }
}

function gameOver() {
    pStamina.value = playerstamina;

    if (playerstamina <= 0) {
        winner.innerText = msgLose();
        gamebox.className = "gameOver"
        defensiveBtn.onclick = function () {};
        sneakyBtn.onclick = function () {};
        aggressiveBtn.onclick = function () {};
    }
}

/* Spells User */

function expelliarmus() {
    /* chance stun 1 turn*/
    compstamina = compstamina - 10
    chance()
    spell.innerHTML = "Expelliarmus deals 10 damage! 💥";
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function incendio() {
    /* chance -10dmg 2 turns*/
    compstamina = compstamina - 5
    chance()
    spell.innerHTML = "Incendio deals 5 damage! 💥";
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function depulso() {
    compstamina = compstamina - 17
    chance()
    spell.innerHTML = "Depulso deals 17 damage! 💥";
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function confringo() {
    /* chance stun 2 turns*/
    compstamina = compstamina - 5
    chance()
    spell.innerHTML = "Confringo deals 5 damage! 💥";
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function rictusempra() {
    /* chance stun 1 turn*/
    compstamina = compstamina - 10
    backgroundBlue()
    chance()
    spell.innerHTML = "Rictusempra deals 10 damage! 💥";
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function flipendo() {
    compstamina = compstamina - 15
    backgroundBlue()
    spell.innerHTML = "Flipendo deals 15 damage! 💥";
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function immobulus() {
    /* chance stun 2 turns*/
    compstamina = compstamina - 5
    backgroundBlue()
    chance()
    spell.innerHTML = "Immmobulus deals 5 damage! 💥";
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function diffindo() {
    /* chance -3dmg 8 turns*/
    compstamina = compstamina - 6
    backgroundBlue()
    chance()
    spell.innerHTML = "Diffindo deals 6 damage! 💥";
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function wiggenweld() {
    /* +6heal 2 turns */
    playerstamina = playerstamina + 5
    backgroundYellow()
    spell.innerHTML = "Wiggenweld Potion increases your stamina by 5 points! 💚";
    pStamina.innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function episkey() {
    /* chance +5heal 2 turns*/
    playerstamina = playerstamina + 10
    backgroundYellow()
    chance()
    spell.innerHTML = "Episkey increases your stamina by 10 points! 💚";
    pStamina.innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function petrificus() {
    /* chance stun 2 turns*/
    compstamina = compstamina - 5
    backgroundYellow()
    chance()
    spell.innerHTML = "Petrificus Totalus deals 5 damage! 💥";
    cStamina.innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

function bombarda() {
    /* chance stun 1 turn & -10dmg 1 turn*/
    compstamina = compstamina - 10
    backgroundYellow()
    chance()
    spell.innerHTML = "Bombarda deals 5 damage! 💥";
    cStamina.innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

/* Spells Computer */

function expelliarmusComp() {
    /* chance stun 1 turn*/
    playerstamina = playerstamina - 10
    backgroundRed()
    chance()
    spell.innerHTML = "Computer used Expelliarmus and deals 10 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function incendioComp() {
    /* chance -10dmg 2 turns*/
    playerstamina = playerstamina - 5
    backgroundRed()
    chance()
    spell.innerHTML = "Computer used Incendio and deals 5 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function depulsoComp() {
    playerstamina = playerstamina - 17
    backgroundRed()
    chance()
    spell.innerHTML = "Computer used Depulso and deals 17 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function confringoComp() {
    /* chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundRed()
    chance()
    spell.innerHTML = "Computer used Confringo and deals 5 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function rictusempraComp() {
    /* chance stun 1 turn*/
    playerstamina = playerstamina - 10
    backgroundBlue()
    chance()
    spell.innerHTML = "Computer used Rictusempra and deals 10 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function flipendoComp() {
    playerstamina = playerstamina - 15
    backgroundBlue()
    spell.innerHTML = "Computer used Flipendo and deals 15 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function immobulusComp() {
    /* chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundBlue()
    chance()
    spell.innerHTML = "Computer used Immmobulus and deals 5 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function diffindoComp() {
    /* chance -3dmg 8 turns*/
    playerstamina = playerstamina - 6
    backgroundBlue()
    chance()
    spell.innerHTML = "Computer used Diffindo and deals 6 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function wiggenweldComp() {
    /* +6heal 2 turns */
    compstamina = compstamina + 5
    backgroundYellow()
    spell.innerHTML = "Computer used Wiggenweld Potion and increases stamina by 5 points! 🟢";
    cStamina.innerHTML = compstamina;
    userMaxstamina()
}

function episkeyComp() {
    /* chance +5heal 2 turns*/
    compstamina = compstamina + 10
    backgroundYellow()
    chance()
    spell.innerHTML = "Computer used Episkey and increases stamina by 10 points! 🟢";
    cStamina.innerHTML = compstamina;
    userMaxstamina()
}

function petrificusComp() {
    /* chance stun 2 turns*/
    playerstamina = playerstamina - 5
    backgroundYellow()
    chance()
    spell.innerHTML = "Computer used Petrificus Totalus and deals 5 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

function bombardaComp() {
    /* chance stun 1 turn & -10dmg 1 turn*/
    playerstamina = playerstamina - 10
    backgroundYellow()
    chance()
    spell.innerHTML = "Computer used Bombarda and deals 5 damage! 💥";
    pStamina.innerHTML = playerstamina;
}

/* Function no more than 100 stamina points*/

function userMaxstamina() {
    pStamina.innerHTML = playerstamina;
    if (playerstamina > 100) {
        playerstamina = 100
    }
}

function compMaxstamina() {
    cStamina.innerHTML = compstamina;
    if (compstamina > 100) {
        compstamina = 100
    }
}

compMaxstamina()

/* Chance function */

function chance() {
    if (Math.random() <= 0.4) {
        if ($chance === false) {
            return $chance = true
        }
    } else {
        if ($chance === true) {
            return $chance = false
        }
    }
}

/* Stun function */

function stun(turn) {
    let turns = 0
}

/* Change Backgrounds */

function backgroundRed() {
    setTimeout(function () {
        gamebox.className = "backgRed";
    }, 100);
    setTimeout(function () {
        gamebox.className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}

function backgroundBlue() {
    setTimeout(function () {
        gamebox.className = "backgBlue";
    }, 100);
    setTimeout(function () {
        gamebox.className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}

function backgroundYellow() {
    setTimeout(function () {
        gamebox.className = "backgYellow";
    }, 100);
    setTimeout(function () {
        gamebox.className = "gamebox";
    }, 200);
    setTimeout(function () {
        gameOver()
        gameVictory()
    }, 500);
}

/* Messages */

function msgWin() {
    Swal.fire({
        title: "Congratulations!",
        html: `
    <img class="img-fluid" src="./img/win.jpg" alt="You win">
    <p class="h4">You won the duel.</p>
    <span><input type="button" value="Reset" class="btn btn-outline-danger"
                onclick="window.location.reload(false)"></span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
    })
}

function msgLose() {
    Swal.fire({
        title: "Oops!",
        html: `
    <img class="img-fluid" src="./img/lose.jpg" alt="You lose">
    <p class="h4">You lost the duel.</p>
    <span><input type="button" value="Reset" class="btn btn-outline-danger"
                onclick="window.location.reload(false)"></span>`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
    })
}

/* Allow click functions */

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