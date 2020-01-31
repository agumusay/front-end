let buttonList = document.querySelectorAll(".button1");
let buttonList1 = document.querySelectorAll(".button2");
let cards = document.querySelectorAll("section");
let compareArray = [];
let compare = arr => {
  return Math.max(...arr);
};
for (let index = 0; index < buttonList.length; index++) {
  let button = buttonList[index];

  button.addEventListener("click", event => {
    let value = Number(
      event.target.closest("section").querySelector("span").innerText
    );
    value++;
    event.target.closest("section").querySelector("span").innerText = value;
    compareArray[index] = Number(value);
    for (let index = 0; index < cards.length; index++) {
      compare(compareArray) ===
        Number(cards[index].querySelector("span").innerText) &&
      0 !== Number(cards[index].querySelector("span").innerText)
        ? cards[index].classList.add("badge")
        : cards[index].classList.remove("badge");
    }
  });
}

for (let index = 0; index < buttonList1.length; index++) {
  let button1 = buttonList1[index];

  button1.addEventListener("click", event => {
    let value = Number(
      event.target.closest("section").querySelector("span").innerText
    );
    if (value > 0) {
      value--;
    }
    event.target.closest("section").querySelector("span").innerText = value;
    compareArray[index] = Number(value);
    for (let index = 0; index < cards.length; index++) {
      compare(compareArray) ===
        Number(cards[index].querySelector("span").innerText) &&
      0 !== Number(cards[index].querySelector("span").innerText)
        ? cards[index].classList.add("badge")
        : cards[index].classList.remove("badge");
    }
  });
}

console.log(compareArray);

console.log(cards);
