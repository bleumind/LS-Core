// #1:
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock!
// 10 times, with each line indented 1 space to the right of the line above it.

// My First Solution:
// let output = "The Flinstones Rock!".split(" ");
// let spaces = [];

// for (let i = 0; i < 10; i++) {
//   console.log(spaces.join("") + output.join(" "));
//   spaces.push(" ");
// }

// Clean Code:
// for (let i = 0; i < 10; i++) {
//   console.log(" ".repeat(i) + "The Flinstones Rock!");
// }

// #2:
// Return a new string that swaps the case of all of the letters:

// My First Solution:
// let munstersDescription = "The Munsters are creepy and spooky.";
// let output2 = "";

// for (let i = 0; i < munstersDescription.length; i++) {
//   if (munstersDescription[i].toUpperCase() === munstersDescription[i]) {
//     output2 += munstersDescription[i].toLowerCase();
//   } else {
//     output2 += munstersDescription[i].toUpperCase();
//   }
// }

// console.log(output2);

// // Next Attempt:
// console.log(
//   munstersDescription
//     .split("")
//     .map(function (char) {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join("")
// );

// #3:
// Fix code when input is 0 or negative number:
// function factors(number) {
//     let divisor = number;
//     let factors = [];
//     do {
//       if (number % divisor === 0) {
//         factors.push(number / divisor);
//       }
//       divisor -= 1;
//     } while (divisor !== 0);
//     return factors;
//   }

// My first solution: Got it first time!
// function factors(number) {
//   let divisor = number;
//   let factors = [];

//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       // To check if an integer. If a number has no remainder it's an integer. Number divided by the divosr is a factor.
//       factors.push(number / divisor);
//     }
//     divisor--;
//   }
//   return factors;
// }

// #4:
//
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

// My first solution:
function isAnIpNumber(numString) {}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length > 4) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
