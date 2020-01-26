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
}
