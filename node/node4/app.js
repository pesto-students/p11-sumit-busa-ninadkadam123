const generateGreeting = require('./greeting');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What Is your name? ', (answer) => {
  fs.writeFile('output.txt', generateGreeting(answer), (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written successfully.');
  });
  rl.close();
});
