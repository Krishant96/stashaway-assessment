const fs = require('fs');
const { deposit, deposit2 } = require('./transactions/transactions.js');

// Read input
let input = fs.readFileSync('input.json');
let inputData = JSON.parse(input);

// calling deposit method with input
// deposit2(inputData);
deposit(inputData);