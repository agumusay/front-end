// const button = document.querySelector("button");
const button = document.querySelector("button");
const resetButton = document.querySelector(".reset");
document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", () => {
    const newElement = document.createElement("span");
    newElement.innerText = "You click the Button";
    button.innerText = "Bye";
    document.body.appendChild(newElement);
  });

  resetButton.addEventListener("click", function() {
    button.removeEventListener("click", clickHandler);
  });
});
let result = null;
