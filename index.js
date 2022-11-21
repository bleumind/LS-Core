// asks user for length x width of room in meters
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

let length = readlineSync.prompt();
length = parseInt(length, 10);

// logs the area of the result in both square meters & square feet
