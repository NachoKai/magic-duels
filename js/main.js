/* Magic Duel

Aggressive  > Sneaky
Sneaky      > Defensive
Defensive   > Aggressive

* If you win, you will choose a spell which corresponds to the stance you selected. Your goal is to get your opponents stamina to 0 before your own stamina depletes.
* Spells can have a couple different effects: direct damage or healing, a chance for damage or healing over time, or a 40% chance for a stun.
* A stunned character will still be able to choose a stance each turn they’re stunned. If a stuned character wins the turn simply ends, if the stunned character loses then the turn proceeds as normal with the opposing character choosing a spell.
* When both characters choose the same stance the round will tie and both can be healed, damaged or nothing depending the action.

* Tabla
______________________________________________________________
			                USER	
		    DEF	            SNE             AGG
        DEF	+1 empate +1	-2 user win 0	+1 comp win -1
        
COMP	SNE	0 comp win -2	-1 empate -1	-2 user win 0

	    AGG	-1 user win +1	0 comp win -2	0 empate 0
______________________________________________________________

! Health: 100 HP

* Tipos de accion:
* Aggressive *
Expelliarmus	10 Dmg		Stun 1 turn chance
Incendio    	5 Dmg		-1 Dmg 2 turns chance
Depulso	       	17 Dmg		–
Confringo	   	5 Dmg		Stun 2 turns chance

* Sneaky *
Rictusempra	   	10 Dmg		Stun 1 turn chance
Flipendo	   	15 Dmg		–
Immobulus   	5 Dmg		Stun 2 turn chance
Diffindo	   	6 Dmg		-3 Dmg 8 turns chance

* Defensive *
Wiggenweld Potion	3 Heal/+6 Heal 2 turns    –
Episkey	           	10 Heal	    	            +5 Heal 2 turns chance
Pertificus Totalus	5 Dmg	                	    Stun 2 turns chance
Bombarda	       	10 Dmg	                        Stun 1 turn chance

? Detalles:
Cada hechizo es una funcion con sus respectivos +1 -+ stuns etc
Mostrar lista de hechizos depende que tipo de accion eligio
ToDo agregar Magic points que se vayan restando depende el hechizo
*/

let playerHealth = 100;
let compHealth = 100;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;
document.getElementById('reset').onclick = resetGame;

function playRock() {
    play('Defensive');
}

function playPaper() {
    play('Sneaky');
}

function playScissors() {
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
    document.getElementById('rock').onclick = playRock;
    document.getElementById('paper').onclick = playPaper;
    document.getElementById('scissors').onclick = playScissors;
};

function gameVictory() {
    document.getElementById('playerHealth').value = playerHealth;

    if (compHealth === 0) {
        document.querySelector("#gamebox").className = "gameVictory"
        document.getElementById('winner').innerText = "Congratulations, you won the game! 👍";
        document.getElementById('rock').onclick = '';
        document.getElementById('paper').onclick = '';
        document.getElementById('scissors').onclick = '';
    }
}

function gameOver() {
    document.getElementById('compHealth').value = compHealth;

    if (playerHealth === 0) {
        document.querySelector("#gamebox").className = "gameOver"
        document.getElementById('winner').innerText = "You lost the game! 👎";
        document.getElementById('rock').onclick = '';
        document.getElementById('paper').onclick = '';
        document.getElementById('scissors').onclick = '';
    }

}
