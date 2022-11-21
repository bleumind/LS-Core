// ask the user for the first number

// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation
const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

let output;
let language = "en";

function messages(msg, lang = "en") {
  return MESSAGES[lang][msg];
}

function prompt(msg) {
  if (messages(msg, language)) {
    console.log(`=> ${messages(msg, language)}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

function validNum(num) {
  if (num.length === 0 || isNaN(num)) return false;

  return true;
}

prompt("intro");

function calculate() {
  prompt("num1");
  let number1 = readline.question();
  while (!validNum(number1)) {
    prompt("error");
    number1 = readline.question();
  }
  prompt("num2");
  let number2 = readline.question();
  while (!validNum(number2)) {
    prompt("error");
    number2 = readline.question();
  }
  prompt("operation");
  let operation = readline.question(); // User input
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Please choose 1) 2) 3) or 4)");
    operation = readline.question();
  }
  switch (operation) {
    case "1":
      output = parseInt(number1) + parseInt(number2);
      break;
    case "2":
      output = parseInt(number1) - parseInt(number2);
      break;
    case "3":
      output = parseInt(number1) * parseInt(number2);
      break;
    case "4":
      output = parseInt(number1) / parseInt(number2);
      break;
  }
  prompt(`The result is ${output}.`);
}

while (true) {
  calculate();
  prompt(`Would you like to make another calculation?. (y/n).`);

  let answer = readline.question();
  if (answer[0].toLowerCase() !== "y") break;
}
