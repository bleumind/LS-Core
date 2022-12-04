// Lesson 6 LS101
let readLine = require("readline-sync");
let messages = require("./tic-tac-toe-msgs.json");
// Tic tac toe.
// Display the initial empty 3x3 board.

function prompt(msg) {
  if (messages(msg)) {
    console.log(messages(msg));
  } else {
    console.log(msg);
  }
}

prompt(messages("welcome"));

function displayBoard() {
  console.log("");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log("     |     |");
  console.log("     |     |");
  console.log("");
}
// Ask the user to mark a square.

// Computer marks a square.

// Display the updated board state.

// If it's a winning board, display the winner.

// If the board is full, display tie.

// If neither player won and the board is not full, go to #2

// Play again?

// If yes, go to #1

// Goodbye!
