let button = document.querySelector("button");
let reset1 = document.querySelector("#reset");

let clickhandler = event => {
  console.log(event.target, event.target.innerText);
};

button.addEventListener("click", clickhandler);

setTimeout(() => {
  button.removeEventListener("click", clickhandler);
}, 5000);

reset1.addEventListener("click", () => {
  button.removeEventListener("click", clickhandler);
});
