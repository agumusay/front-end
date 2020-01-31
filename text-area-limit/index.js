let textArea = document.querySelector("textarea");
let difference = 0;
let counter = 0;
let maxChars = 10;

textArea.addEventListener("keydown", event => {
  counter = event.target.value.length;
  difference = maxChars - counter;
  document.querySelector("p").innerText = difference;
  if (event.keyCode === 8) {
    return false;
  } else if (difference <= 0) {
    event.preventDefault();
  }
});
