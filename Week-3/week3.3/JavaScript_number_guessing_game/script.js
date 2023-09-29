// Your solution goes here

function playGuessingGame(numToGuess = 23, totalGuesses = 10) {
  let count = 0;
  let guessNum = prompt('Enter the number between 1 to 100');

  while (count < totalGuesses && guessNum) {
    count++;
    if (guessNum < numToGuess) {
      guessNum = prompt(
        guessNum + ' is too small. Guess a larger number'
      );
    } else if (guessNum > numToGuess) {
      guessNum = prompt(
        guessNum + ' is too large. Guess a smaller number.'
      );
    } else if (isNaN(guessNum)) {
      count--;
      guessNum = prompt(guessNum + ' Please enter a number.');
    } else if (guessNum == numToGuess) {
      return count;
    }
  }

  return 0;
}
