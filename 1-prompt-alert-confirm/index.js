const randomNumber = Math.round(Math.random() * 100);
alert(randomNumber);
const askToPlay = window.confirm("Do you want to play a game ?");
let count = 9;
if (askToPlay) {
  let question = window.prompt("Guess a random number between 1-100");
  while (count) {
    if (question != randomNumber) {
      question = window.prompt(` ${count} attempts left, Try Again!`);
    } else {
      window.alert("You win!");
      break;
    }
    count--;
  }
  if (!count) {
    window.alert("You lose!");
  }
} else {
  window.alert("maybe another time");
}
