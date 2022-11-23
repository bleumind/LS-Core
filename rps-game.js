const readline = require("readline-sync");
const MESSAGES = require("./rps-game-messages.json");

let humanChoice;
let computerChoice;
let randomNum;
let weapons = ["rock", "paper", "scissor", "r", "p", "s"];

let rocksCount = 0;
let papersCount = 0;
let scissorsCount = 0;

function randomNumForComputer() {
  return Math.floor(Math.random() * 12) + 1;
}
function prompt(msg) {
  if (MESSAGES[msg]) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`${msg}`);
  }
}

function rpsGame() {
  // Human input
  prompt("weapon");
  humanChoice = readline.prompt();

  while (true) {
    if (!weapons.includes(humanChoice.toLowerCase())) {
      prompt(
        `\n=> ${humanChoice} is not a valid choice.\n=> Please choose rock, paper or scissor. Or (r/p/s) for short.`
      );
      humanChoice = readline.prompt();
    }

    if (weapons.includes(humanChoice.toLowerCase())) {
      switch (humanChoice[0]) {
        case "r":
          humanChoice = "Rocks!";
          break;
        case "p":
          humanChoice = "Papers!";
          break;
        case "s":
          humanChoice = "Scissors!";
          break;
      }

      break;
    }
  }

  // Computer input
  randomNum = randomNumForComputer();
  if (randomNum <= 4) {
    prompt(`\n=> You chose, ${humanChoice}\n=> Computer chose, Rocks!`);
    computerChoice = "rock";
    //   rocksCount++;
  } else if (randomNum <= 8) {
    prompt(`\n=> You chose, ${humanChoice}\n=> Computer chose, Papers!`);
    computerChoice = "paper";

    //   papersCount++;
  } else if (randomNum <= 12) {
    prompt(`\n=> You chose, ${humanChoice}\n=> Computer chose, Scissors!`);
    computerChoice = "scissor";

    //   scissorsCount++;
  }

  // Battle
  if (humanChoice[0].toLowerCase() === "r") {
    switch (computerChoice) {
      case "rock":
        prompt("\n=> It's a Draw!");
        break;
      case "paper":
        prompt("\n=> You Lose!");
        break;
      case "scissor":
        prompt("\n=> You Win!");
        break;
    }
  } else if (humanChoice[0].toLowerCase() === "p") {
    switch (computerChoice) {
      case "rock":
        prompt("\n=> You Win!");
        break;
      case "paper":
        prompt("\n=> It's a Draw!");
        break;
      case "scissor":
        prompt("\n=> You Lose!");
        break;
    }
  } else if (humanChoice[0].toLowerCase() === "s") {
    switch (computerChoice) {
      case "rock":
        prompt("\n=> You Lose!");
        break;
      case "paper":
        prompt("\n=> You Win!");
        break;
      case "scissor":
        prompt("\n=> It's a Draw!");
        break;
    }
  }

  prompt(
    "\n=> Do you wish to play again? Press 'y' for yes.\n=> Press anything else to end application."
  );
  let playAgain = readline.prompt();

  if (playAgain[0].toLowerCase() == "y") {
    rpsGame();
  } else {
    prompt("endGame");
  }
}

prompt(" ");
prompt("welcome");
rpsGame();
