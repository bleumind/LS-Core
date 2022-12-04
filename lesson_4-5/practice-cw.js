// // last letter of 1 word and the first letter of another word are the same.
// // return true if string can be combined into one word.
// // each word must be only used once else return false.

// //input is array of 3 to 7 words of random length. No capital letters.

// let statement = "The Flintstones Rock";

// let output = {};

// let characters = statement.split("").filter((char) => char !== " ");

// characters.forEach((char) => {
//   output[char] = output[char] || 0;
//   output[char]++;
// });

// console.log(output);

// // { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// let arr = [
//   ["b", "c", "a"],
//   [2, 11, -3, 5, 1, -6, 20],
//   ["blue", "black", "green"],
// ];

// console.log(
//   arr.map((subArr) => {
//     return subArr.slice().sort((a, b) => {
//       if (typeof a == "number") {
//         console.log("b:" + b);
//         console.log("a:" + a);

//         return b - a;
//       } else if (typeof a == "string") {
//         if (a < b) {
//           return 1;
//         } else if (a > b) {
//           return -1;
//         }
//       }
//     });
//   })
// );
// console.log(arr);

// let arr1 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// console.log(
//   arr1.slice().map((obj) => {
//     for (key in obj) {
//       obj[key]++;
//     }
//     return obj;
//   })
// );

// let arr2 = [[2], [3, 5, 7], [9], [11, 15, 18]];

// console.log(
//   arr2.map((arr) => {
//     return arr.filter((num) => num % 3 === 0);
//   })
// );

// let arr3 = [
//   [1, 6, 7],
//   [1, 5, 3],
//   [1, 8, 3],
// ];

// console.log(
//   arr3.sort((a, b) => {
//     return (
//       a.filter((num) => num % 2 === 1).reduce((a, b) => a + b) -
//       b.filter((num) => num % 2 === 1).reduce((a, b) => a + b)
//     );
//   })
// );

// let obj4 = {
//   grape: { type: "fruit", colors: ["red", "green"], size: "small" },
//   carrot: { type: "vegetable", colors: ["orange"], size: "medium" },
//   apple: { type: "fruit", colors: ["red", "green"], size: "medium" },
//   apricot: { type: "fruit", colors: ["orange"], size: "medium" },
//   marrow: { type: "vegetable", colors: ["green"], size: "large" },
// };

// let output2 = [];

// // for (key in obj4) {
// //   for (key2 in obj4[key]) {
// //     if (obj4[key][key2] == "fruit")
// //       output2.push(
// //         obj4[key].colors.map((word) => {
// //           return `${word[0].toUpperCase()}${word.slice(1)}`;
// //         })
// //       );
// //     if (obj4[key][key2] == "vegetable")
// //       output2.push(obj4[key].size.toUpperCase());
// //   }
// // }
// let capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// console.log(
//   Object.values(obj4).map((obj) => {
//     if (obj.type == "fruit") {
//       return obj.colors.map((word) => capitalize(word));
//     } else if (obj.type == "vegetable") {
//       return obj.size.toUpperCase();
//     }
//   })
// );

// let arr5 = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];

// console.log(
//   arr5.filter((obj) => {
//     console.log(Object.values(obj).flat());
//     if (
//       Object.values(obj)
//         .flat()
//         .every((num) => num % 2 == 0)
//     ) {
//       return obj;
//     }
//   })
// );

// let arr6 = [
//   ["a", 1],
//   ["b", "two"],
//   ["sea", { c: 3 }],
//   ["D", ["a", "b", "c"]],
// ];

// let obj6 = {};

// arr6.forEach((arr) => {
//   obj6[arr[0]] = arr[1];
// });

// console.log(Object.fromEntries(arr6));

function createUUID() {
  let uuidString = "0123456789abcdef";
  let randomNum = () => Number(Math.round(Math.random() * 14));
  let newUUID = "";

  while (newUUID.length < 36) {
    let randomIndex = randomNum();
    switch (newUUID.length) {
      case 8:
      case 13:
      case 18:
      case 23:
        console.log(randomIndex);
        newUUID += "-";
        newUUID += uuidString[randomIndex];
        break;
      default:
        console.log(randomIndex);
        newUUID += uuidString[randomIndex];
    }
  }

  return newUUID;
}

console.log(createUUID());
