const askToPlay = window.confirm("Do you want to play a game ?");

if (askToPlay) {
  let answer1 = window.prompt("please enter a number");
  while (isNaN(answer1)) {
    answer1 = window.prompt("please enter first number");
  }
  let answer2 = window.prompt("please enter another number");
  while (isNaN(answer2)) {
    answer2 = window.prompt("please enter second number");
  }
  if (Math.abs(100 - Number(answer1)) === Math.abs(100 - Number(answer2))) {
    window.alert(`${answer1} is equal to ${answer2}`);
  } else if (
    Math.abs(100 - Number(answer1)) < Math.abs(100 - Number(answer2))
  ) {
    window.alert(`${answer1}`);
  } else {
    window.alert(`${answer2}`);
  }
}
