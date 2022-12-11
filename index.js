const fs = require('fs');
const { deposit } = require('./transactions/transactions.js');

// Read input
let input = fs.readFileSync('input.json');
let inputData = JSON.parse(input);

// calling deposit method with input
deposit(inputData);