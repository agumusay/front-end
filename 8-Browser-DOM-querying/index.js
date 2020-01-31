let body = document.body;
body.style.backgroundColor = "#FF2954";
body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-around";
let header = document.querySelector("h1");
header.style.textAlign = "center";
header.style.fontFamily = "Sans Serif";
let headings = Array.from(document.getElementsByClassName("category"));

headings.map(heading => {
  heading.style.textDecoration = "underline";
  heading.style.color = "white";
  heading.style.fontSize = "2rem";
  heading.style.fontFamily = "arial";
});

const colorGenerator = opacity => {
  let randomNumber = Math.floor(Math.random() * 255);
  let randomNumber1 = Math.floor(Math.random() * 255);
  let randomNumber2 = Math.floor(Math.random() * 255);
  return `rgba(${randomNumber}, ${randomNumber1}, ${randomNumber2}, ${opacity} )`;
};

let unorderedList = Array.from(document.querySelectorAll("ul.food-category"));

unorderedList.map(list => {
  list.style.width = "25%";
  list.style.height = "175px";
  list.style.display = "flex";
  list.style.flexDirection = "column";
  list.style.justifyContent = "space-around";
  list.style.backgroundColor = `${colorGenerator(0.8)}`;
  list.style.fontFamily = "Sans Serif";
  list.style.fontSize = "1.2rem";
});
let main = document.querySelector("main");

main.style.display = "flex";
main.style.flexDirection = "row";
main.style.justifyContent = "space-around";

let warning = document.getElementById("warning");
warning.style.fontSize = "35px";
warning.style.fontFamily = "Sans Serif";

let evens = Array.from(
  document.querySelectorAll(".allergy-info:nth-child(even)")
);

let allergies = document.querySelector(".allergies");
allergies.style.display = "inline-flex";
allergies.style.flexDirection = "column";
allergies.style.listStyleType = "none";
allergies.style.width = "30%";
allergies.style.textAlign = "start";
allergies.style.fontSize = "1.3rem";
allergies.style.fontFamily = "Sans Serif";

evens.map(even => {
  even.style.backgroundColor = "gray";
});

let warningContainer = document.querySelector(".allergy-warning");

warningContainer.setAttribute("align", "center");

let footer = document.querySelector("footer");
footer.style.display = "flex";
footer.style.justifyContent = "center";

let footerElements = Array.from(document.getElementsByClassName("food-desc"));

footerElements.map(element => {
  element.style.margin = "50px";
  element.style.width = "175px";
  element.style.height = "175px";
  element.style.borderRadius = "100%";
  element.style.border = "5px solid orange";
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
  element.style.fontFamily = "Sans Serif";
});

if (window.innerWidth < 756) {
  main.style.flexDirection = "column";
  main.style.width = "90%";
  main.style.alignItems = "center";
  header.style.marginTop = "1000px";
  body.style.alignItems = "center";
  body.style.height = "none";
  unorderedList.map(element => {
    element.style.width = "100%";
  });
  footer.style.flexDirection = "column";
  allergies.style.width = "80%";
  allergies.style.padding = "0";
}
