const readline = require("readline-sync");
const MESSAGES = require("./loan-calculator-messages.json");

let loanAmount;
let interestRate;
let loanDuration;
// Get monthly interest rate
// Get loan duration in months
function prompt(msg) {
  if (MESSAGES[msg]) {
    console.log(MESSAGES[msg]);
  } else {
    console.log(msg);
  }
}

function calculateLoan(loanAmount, interestRate, loanDuration) {
  let annualIR = interestRate / 100;
  let monthlyIR = annualIR / 12;
  let monthlyPay =
    loanAmount * (monthlyIR / (1 - Math.pow(monthlyIR + 1, -loanDuration)));
  prompt(`\n=> Monthly payment: $${monthlyPay.toFixed(2)}!\n`);
}

function getInput() {
  prompt("loanAmount");
  loanAmount = readline.prompt();
  while (true) {
    if (isNaN(Number(loanAmount))) {
      prompt("=> Loan amount does not look like a valid number.");
      loanAmount = readline.prompt();
    } else {
      break;
    }
  }
  prompt("interestRate");
  interestRate = readline.prompt();
  while (true) {
    if (isNaN(Number(interestRate))) {
      prompt("=> Interest rate does not look like a valid number.");
      interestRate = readline.prompt();
    } else {
      break;
    }
  }
  prompt("loanDuration");
  loanDuration = readline.prompt();
  while (true) {
    if (
      isNaN(Number(loanDuration)) ||
      (Number(loanDuration) < 1 && Number(loanDuration) <= 72)
    ) {
      prompt(
        "=> Loan duration in months, does not look like a valid number.\n\n=> Please enter 1 to 72 months as the loan duration."
      );
      loanDuration = readline.prompt();
    } else {
      break;
    }
  }

  calculateLoan(loanAmount, interestRate, loanDuration);
  prompt("newCalculation");
  let answer = readline.prompt();
  if (answer.toLowerCase() === "y") {
    getInput();
  } else {
    prompt("Thank you for using this loan calculator! Goodbye.");
  }
}

prompt("welcome");
getInput();
