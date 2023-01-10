const playerstamina = 100;
const compstamina = 100;
const playerTurn = false;
const defensiveBtn = document.getElementById("defensive");
const sneakyBtn = document.getElementById("sneaky");
const aggressiveBtn = document.getElementById("aggressive");
const resetBtn = document.getElementById("reset");
const instructions = document.getElementById("instructions");
const userContainer = document.getElementById("user-container");
const aggressiveSpells = document.getElementById("spells-aggressive");
const defensiveSpells = document.getElementById("spells-defensive");
const sneakySpells = document.getElementById("spells-sneaky");
const result = document.getElementById("result");
const winner = document.getElementById("winner");
const select = document.getElementById("select");
const spell = document.getElementById("spell");
const chanceMsg = document.getElementById("chance");
const gamebox = document.getElementById("gamebox");
const pStamina = document.getElementById("playerstamina");
const cStamina = document.getElementById("compstamina");
let turn = 0;

const updateTurnNumber = turn => (document.querySelector("#turn").textContent = turn);

const hideSpellsTable = () => {
  instructions.innerHTML = "";
  aggressiveSpells.className = "aggressive hidden";
  defensiveSpells.className = "defensive hidden";
  sneakySpells.className = "sneaky hidden";
};

defensiveBtn.addEventListener("click", () => {
  turn++;
  updateTurnNumber(turn);
  hideSpellsTable();
  play("Defensive");
});

sneakyBtn.addEventListener("click", () => {
  turn++;
  updateTurnNumber(turn);
  hideSpellsTable();
  play("Sneaky");
});

aggressiveBtn.addEventListener("click", () => {
  turn++;
  updateTurnNumber(turn);
  hideSpellsTable();
  play("Aggressive");
});

resetBtn.addEventListener("click", resetGame);

const getCompChoice = () => {
  const choices = ["Defensive", "Sneaky", "Aggressive"];
  const compChooses = choices[Math.floor(Math.random() * choices.length)];
  return compChooses;
};

const getCompChoiceSpell = () => {
  const choiceSpell = ["1", "2", "3", "4"];
  const compChooseSpell = choiceSpell[Math.floor(Math.random() * choiceSpell.length)];
  return compChooseSpell;
};

function play(userPlay) {
  const compChoice = getCompChoice();
  const compChoiceSpell = getCompChoiceSpell();
  result.innerHTML = `You: ${userPlay} ⚡ Computer: ${compChoice}`;

  if (userPlay === "Defensive") {
    if (compChoice === "Defensive") {
      winner.innerHTML = "🟡 It's a tie! 🟡";
      spell.innerHTML = "";
      chanceMsg.innerHTML = "";
      backgroundYellow();
      compstamina++;
      playerstamina++;
    } else if (compChoice === "Sneaky") {
      winner.innerHTML = "🟢 You win! 🟢";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "🔮 Chance 🔮";
      backgroundGreen();
      compstamina--;
      playerstamina++;
    } else if (compChoice === "Aggressive") {
      winner.innerHTML = "🔴 You lose! 🔴";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "🔥 Chance 🔥";
      backgroundRed();
      compstamina++;
      playerstamina--;
    }
  } else if (userPlay === "Sneaky") {
    if (compChoice === "Defensive") {
      winner.innerHTML = "🟢 You win! 🟢";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "🔮 Chance 🔮";
      backgroundGreen();
      compstamina--;
      playerstamina++;
    } else if (compChoice === "Sneaky") {
      winner.innerHTML = "🟡 It's a tie! 🟡";
      spell.innerHTML = "";
      chanceMsg.innerHTML = "";
      backgroundYellow();
      compstamina++;
      playerstamina++;
    } else if (compChoice === "Aggressive") {
      winner.innerHTML = "🟢 You win! 🟢";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "💥 Chance 💥";
      backgroundGreen();
      compstamina--;
      playerstamina++;
    }
  } else if (userPlay === "Aggressive") {
    if (compChoice === "Defensive") {
      winner.innerHTML = "🟢 You win! 🟢";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "🔥 Chance 🔥";
      backgroundGreen();
      compstamina--;
      playerstamina++;
    } else if (compChoice === "Sneaky") {
      winner.innerHTML = "🟢 You win! 🟢";
      spell.innerHTML = `Computer casted: ${compChoiceSpell}`;
      chanceMsg.innerHTML = "💥 Chance 💥";
      backgroundGreen();
      compstamina--;
      playerstamina++;
    } else if (compChoice === "Aggressive") {
      winner.innerHTML = "🟡 It's a tie! 🟡";
      spell.innerHTML = "";
      chanceMsg.innerHTML = "";
      backgroundYellow();
      compstamina++;
      playerstamina++;
    }
  }

  if (playerstamina < 1) {
    gameOver();
  }

  if (compstamina < 1) {
    gameOver();
  }

  pStamina.innerHTML = `Player's stamina: ${playerstamina}`;
  cStamina.innerHTML = `Computer's stamina: ${compstamina}`;
}

const backgroundYellow = () => {
  gamebox.className = "yellow";
  setTimeout(() => {
    gamebox.className = "";
  }, 1500);
};

const backgroundGreen = () => {
  gamebox.className = "green";
  setTimeout(() => {
    gamebox.className = "";
  }, 1500);
};

const backgroundRed = () => {
  gamebox.className = "red";
  setTimeout(() => {
    gamebox.className = "";
  }, 1500);
};

const gameOver = () => {
  result.innerHTML = "";
  winner.innerHTML = "Game Over";
  spell.innerHTML = "";
  chanceMsg.innerHTML = "";
  userContainer.className = "hidden";
  gamebox.className = "gameover";
  resetBtn.innerHTML = "Play Again";
  resetBtn.className = "playagain";
  resetBtn.addEventListener("click", resetGame);
};

const resetGame = () => {
  result.innerHTML = "";
  winner.innerHTML = "";
  spell.innerHTML = "";
  chanceMsg.innerHTML = "";
  userContainer.className = "";
  gamebox.className = "";
  resetBtn.innerHTML = "Reset";
  resetBtn.className = "reset";
  playerstamina = 100;
  compstamina = 100;
  pStamina.innerHTML = `Player's stamina: ${playerstamina}`;
  cStamina.innerHTML = `Computer's stamina: ${compstamina}`;
  turn = 0;
  updateTurnNumber(turn);
};

const SPELLS = {
  rictusempra: {
    compStamina: 10,
    background: "blue",
    stun: true,
    message: "Rictusempra deals 10 damage!",
    chanceMessage: "Stun chance 1 turn: ",
  },
  flipendo: {
    compStamina: 15,
    background: "blue",
    message: "Flipendo deals 15 damage!",
  },
  immobulus: {
    compStamina: 5,
    background: "blue",
    stun: true,
    message: "Immmobulus deals 5 damage!",
    chanceMessage: "Stun chance 2 turns: ",
  },
  diffindo: {
    compStamina: 6,
    background: "blue",
    stun: true,
    message: "Diffindo deals 6 damage!",
    chanceMessage: "3 Damage chance 8 turns: ",
  },
  wiggenweld: {
    playerStamina: 5,
    background: "yellow",
    message: "Wiggenweld Potion increases your stamina by 5 points!",
    chanceMessage: "6 Heal chance 2 turns: ",
  },
  episkey: {
    playerStamina: 10,
    background: "yellow",
    stun: true,
    message: "Episkey increases your stamina by 10 points!",
    chanceMessage: "5 Heal chance 2 turns: ",
  },
  petrificus: {
    compStamina: 5,
    background: "yellow",
    stun: true,
    message: "Petrificus Totalus deals 5 damage!",
    chanceMessage: "Stun chance 2 turns: ",
  },
  bombarda: {
    compStamina: 10,
    background: "yellow",
    stun: true,
    message: "Bombarda deals 5 damage!",
    chanceMessage: "10 Damage and Stun chance 1 turn: ",
  },
  expelliarmusComp: {
    playerStamina: 10,
    background: "red",
    stun: true,
    message: "Computer used Expelliarmus and deals 10 damage!",
    chanceMessage: "Stun chance 1 turn: ",
  },
  incendioComp: {
    playerStamina: 5,
    background: "red",
    stun: true,
    message: "Computer used Incendio and deals 5 damage!",
    chanceMessage: "10 Damage chance 2 turns: ",
  },
  depulsoComp: {
    playerStamina: 8,
    background: "red",
    message: "Computer used Depulso and deals 8 damage!",
  },
  expelliarmus: {
    compStamina: 15,
    background: "blue",
    message: "Expelliarmus deals 15 damage!",
    stun: true,
    message: "Lumos deals 2 damage!",
    chanceMessage: "Stun chance 1 turn: ",
  },
  protego: {
    playerStamina: 3,
    background: "yellow",
    message: "Protego increases your stamina by 3 points!",
  },
  mobilicorpus: {
    playerStamina: 5,
    background: "yellow",
    message: "Mobilicorpus increases your stamina by 5 points!",
  },
  alohomora: {
    compStamina: 5,
    background: "yellow",
    message: "Alohomora deals 5 damage!",
  },
  crucio: {
    compStamina: 10,
    background: "red",
    stun: true,
    message: "Crucio deals 10 damage!",
    chanceMessage: "Stun chance 1 turn: ",
  },
  sectumsempra: {
    compStamina: 15,
    background: "red",
    message: "Sectumsempra deals 15 damage!",
  },
  stupefy: {
    compStamina: 8,
    background: "red",
    stun: true,
    message: "Stupefy deals 8 damage!",
    chanceMessage: "Stun chance 1 turn: ",
  },
};

function castSpell(spell) {
  const spellData = SPELLS[spell];
  let { compStamina, playerStamina, background, stun, message, chanceMessage } =
    spellData;
  if (compStamina) compstamina = compstamina - compStamina;
  if (playerStamina) playerstamina = playerstamina + playerStamina;
  if (background) background[background]();
  select.innerHTML = "";
  spell.innerHTML = message;
  if (stun) chanceMsg.innerHTML = `${chanceMessage}${stun()}`;
  cStamina.innerHTML = compstamina;
  pStamina.innerHTML = playerstamina;
  sneakySpells.className = "sneaky hidden";
  defensiveSpells.className = "defensive hidden";
  userMaxstamina();
}
