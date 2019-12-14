let playerstamina = 100;
let compstamina = 100;
let playerTurn = false
let defensiveBtn = document.getElementById('defensive')
let sneakyBtn = document.getElementById('sneaky')
let aggressiveBtn = document.getElementById('aggressive')
let resetBtn = document.getElementById('reset')
let instructions = document.getElementById('instructions')
let userContainer = document.getElementById('user-container')
let aggressiveSpells = document.getElementById('spells-aggressive')
let defensiveSpells = document.getElementById('spells-defensive')
let sneakySpells = document.getElementById('spells-sneaky')
let result = document.getElementById('result')
let winner = document.getElementById('winner')
let select = document.getElementById('select')
let spell = document.getElementById('spell')
let chanceMsg = document.getElementById('chance')
let gamebox = document.getElementById("gamebox")
let pStamina = document.getElementById('playerstamina')
let cStamina = document.getElementById('compstamina')
let $chance = false
let turn = 0
const c = console.log

defensiveBtn.onclick = playDefensive;
sneakyBtn.onclick = playSneaky;
aggressiveBtn.onclick = playAggressive;
resetBtn.onclick = resetGame;

function updateTurnNumber(turn) {
    document.querySelector('#turn').textContent = turn;
}

function hideSpellsTable() {
    instructions.innerHTML = ''
    aggressiveSpells.className = "aggressive hidden"
    defensiveSpells.className = "defensive hidden"
    sneakySpells.className = "sneaky hidden"
}

function playDefensive() {
    turn++
    updateTurnNumber(turn)
    hideSpellsTable()
    play('Defensive');
}

function playSneaky() {
    turn++
    updateTurnNumber(turn)
    hideSpellsTable()
    play('Sneaky');
}

function playAggressive() {
    turn++
    updateTurnNumber(turn)
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
            winner.innerHTML = "🟡 It's a tie! 🟡";
            spell.innerHTML = ''
            chanceMsg.innerHTML = ''
            backgroundYellow()
            compstamina++;
            playerstamina++;
        } else if (compChoice === 'Sneaky') {
            winner.innerHTML = "🟡 Computer wins! 🟦";
            select.innerHTML = ''
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
            chanceMsg.innerHTML = ''
            winner.innerHTML = "🟡 You win! 🔺";
            select.innerHTML = "Select a spell:"
            userContainer.className = 'hidden'
            playerstamina++;
            compstamina--;
        }

    } else if (userPlay === 'Sneaky') {
        if (compChoice === 'Sneaky') {
            winner.innerHTML = "🟦 It's a tie! 🟦";
            spell.innerHTML = ''
            chanceMsg.innerHTML = ''
            backgroundBlue()
            playerstamina--;
            compstamina--;
        } else if (compChoice === 'Defensive') {
            defensiveSpells.className = "defensive hidden"
            sneakySpells.className = "sneaky"
            aggressiveSpells.className = "aggressive hidden"
            spell.innerHTML = ''
            chanceMsg.innerHTML = ''
            winner.innerHTML = "🟦 You win! 🟡";
            select.innerHTML = "Select a spell:"
            userContainer.className = 'hidden'
            compstamina = compstamina - 2
        } else if (compChoice === 'Aggressive') {
            winner.innerHTML = "🟦 Computer wins! 🔺";
            select.innerHTML = ''
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
            winner.innerHTML = "🔺 It's a tie! 🔺";
            spell.innerHTML = ''
            chanceMsg.innerHTML = ''
            backgroundRed()
        } else if (compChoice === 'Defensive') {
            winner.innerHTML = "🔺 Computer wins! 🟡";
            select.innerHTML = ''
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
            chanceMsg.innerHTML = ''
            winner.innerHTML = "🔺 You win! 🟦";
            select.innerHTML = "Select a spell:"
            userContainer.className = 'hidden'
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
    turn = 0
    updateTurnNumber(turn)
    userContainer.className = 'usercontainer'
    gamebox.className = "gamebox"
    result.innerHTML = ''
    winner.innerHTML = ''
    spell.innerHTML = ''
    select.innerHTML = ''
    chanceMsg.innerHTML = ''
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
    compstamina = compstamina - 10
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Expelliarmus deals 10 damage!";
    chanceMsg.innerHTML = `Stun chance 1 turn: ${stun()}`;
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function incendio() {
    compstamina = compstamina - 5
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Incendio deals 5 damage!";
    chanceMsg.innerHTML = `10 Damage chance 2 turns: ${stun()}`;
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function depulso() {
    compstamina = compstamina - 17
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Depulso deals 17 damage!";
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function confringo() {
    compstamina = compstamina - 5
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Confringo deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    backgroundRed()
    cStamina.innerHTML = compstamina;
    aggressiveSpells.className = "aggressive hidden"
}

function rictusempra() {
    compstamina = compstamina - 10
    backgroundBlue()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Rictusempra deals 10 damage!";
    chanceMsg.innerHTML = `Stun chance 1 turn: ${stun()}`;
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function flipendo() {
    compstamina = compstamina - 15
    backgroundBlue()
    select.innerHTML = ""
    spell.innerHTML = "Flipendo deals 15 damage!";
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function immobulus() {
    compstamina = compstamina - 5
    backgroundBlue()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Immmobulus deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function diffindo() {
    compstamina = compstamina - 6
    backgroundBlue()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Diffindo deals 6 damage!";
    chanceMsg.innerHTML = `3 Damage chance 8 turns: ${stun()}`;
    cStamina.innerHTML = compstamina;
    sneakySpells.className = "sneaky hidden"
}

function wiggenweld() {
    playerstamina = playerstamina + 5
    backgroundYellow()
    select.innerHTML = ""
    spell.innerHTML = "Wiggenweld Potion increases your stamina by 5 points!";
    chanceMsg.innerHTML = `6 Heal chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function episkey() {
    playerstamina = playerstamina + 10
    backgroundYellow()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Episkey increases your stamina by 10 points!";
    chanceMsg.innerHTML = `5 Heal chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
    defensiveSpells.className = "defensive hidden"
    userMaxstamina()
}

function petrificus() {
    compstamina = compstamina - 5
    backgroundYellow()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Petrificus Totalus deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    cStamina.innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

function bombarda() {
    compstamina = compstamina - 10
    backgroundYellow()
    stun()
    select.innerHTML = ""
    spell.innerHTML = "Bombarda deals 5 damage!";
    chanceMsg.innerHTML = `10 Damage and Stun chance 1 turn: ${stun()}`;
    cStamina.innerHTML = compstamina;
    defensiveSpells.className = "defensive hidden"
}

/* Spells Computer */
function expelliarmusComp() {
    playerstamina = playerstamina - 10
    backgroundRed()
    stun()
    spell.innerHTML = "Computer used Expelliarmus and deals 10 damage!";
    chanceMsg.innerHTML = `Stun chance 1 turn: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function incendioComp() {
    playerstamina = playerstamina - 5
    backgroundRed()
    stun()
    spell.innerHTML = "Computer used Incendio and deals 5 damage!";
    chanceMsg.innerHTML = `10 Damage chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function depulsoComp() {
    playerstamina = playerstamina - 17
    backgroundRed()
    stun()
    spell.innerHTML = "Computer used Depulso and deals 17 damage!";
    pStamina.innerHTML = playerstamina;
}

function confringoComp() {
    playerstamina = playerstamina - 5
    backgroundRed()
    stun()
    spell.innerHTML = "Computer used Confringo and deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function rictusempraComp() {
    playerstamina = playerstamina - 10
    backgroundBlue()
    stun()
    spell.innerHTML = "Computer used Rictusempra and deals 10 damage!";
    chanceMsg.innerHTML = `Stun chance 1 turn: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function flipendoComp() {
    playerstamina = playerstamina - 15
    backgroundBlue()
    spell.innerHTML = "Computer used Flipendo and deals 15 damage!";
    pStamina.innerHTML = playerstamina;
}

function immobulusComp() {
    playerstamina = playerstamina - 5
    backgroundBlue()
    stun()
    spell.innerHTML = "Computer used Immmobulus and deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function diffindoComp() {
    playerstamina = playerstamina - 6
    backgroundBlue()
    stun()
    spell.innerHTML = "Computer used Diffindo and deals 6 damage!";
    chanceMsg.innerHTML = `3 Damage chance 8 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function wiggenweldComp() {
    compstamina = compstamina + 5
    backgroundYellow()
    spell.innerHTML = "Computer used Wiggenweld Potion and increases stamina by 5 points!";
    chanceMsg.innerHTML = `6 Heal chance 2 turns: ${stun()}`;
    cStamina.innerHTML = compstamina;
    userMaxstamina()
}

function episkeyComp() {
    compstamina = compstamina + 10
    backgroundYellow()
    stun()
    spell.innerHTML = "Computer used Episkey and increases stamina by 10 points!";
    chanceMsg.innerHTML = `5 Heal chance 2 turns: ${stun()}`;
    cStamina.innerHTML = compstamina;
    userMaxstamina()
}

function petrificusComp() {
    playerstamina = playerstamina - 5
    backgroundYellow()
    stun()
    spell.innerHTML = "Computer used Petrificus Totalus and deals 5 damage!";
    chanceMsg.innerHTML = `Stun chance 2 turns: ${stun()}`;
    pStamina.innerHTML = playerstamina;
}

function bombardaComp() {
    playerstamina = playerstamina - 10
    backgroundYellow()
    stun()
    spell.innerHTML = "Computer used Bombarda and deals 5 damage!";
    chanceMsg.innerHTML = `10 Damage and Stun chance 1 turn: ${stun()}`;
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
function stun() {
    chance()
    if ($chance === true) {
        return 'Triggered!'
    } else {
        if ($chance === false) {
            return 'Failed!'
        }
    }
}

/* Change Backgrounds */
function backgroundRed() {
    userContainer.className = 'usercontainer'
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
    userContainer.className = 'usercontainer'
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
    userContainer.className = 'usercontainer'
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
