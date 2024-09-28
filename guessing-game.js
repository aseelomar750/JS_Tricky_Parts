function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let i = 0; // counter

  return function (guesnumber) {
    i++;
    if (guesnumber === randomNumber) {
      return `You win! You found ${guesnumber} in ${i} guesses.`;
    } else if (guesnumber > randomNumber) {
      return `${guesnumber} is too high!`;
    } else if (guesnumber < randomNumber) return `${guesnumber} is too low!`;
    else {
      return `You lose! You guessed the wrong number ${guesnumber}. The correct number is ${randomNumber}.`;
    }
    
  };
}
let game = guessingGame();
console.log(game(4));
console.log(game(3));
console.log(game(56));
console.log(game(2));
console.log(game(32));
console.log(game(3));
console.log(game(22));
console.log(game(43));
console.log(game(99));
console.log(game(65));
// module.exports = { guessingGame };
