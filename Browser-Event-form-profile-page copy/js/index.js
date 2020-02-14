let form = document.querySelector("form");
let formElements = form.elements;
let card = document.querySelector(".page--generated");

form.addEventListener("submit", event => {
  event.preventDefault();
  skillsArr = [];
  for (let index = 0; index < formElements["userSkills"].length; index++) {
    const element = formElements["userSkills"][index];
    if (element.checked) {
      skillsArr.push(element.value);
    }
  }

  let userName = document.getElementsByName("userName")[0];
  console.log(userName.innerText);
  let userPic = document.getElementsByName("userPic")[0].files[0].name;
  let userColor = document.getElementsByName("userColor")[0].value;
  let userDescription = document.getElementsByName("userDescription")[0].value;
  let userSkills = Array.from(document.getElementsByName("userSkills"))
    .map(ele => {
      if (ele.checked) {
        return ele.value;
      }
    })
    .filter(ele => ele);
  let string = "";
  userSkills.map(ele => {
    string += `${ele}, `;
  });

  console.log(string);
  card.style.cssText = `
    display: block;
    background-color : ${userColor};
    `;
  console.log(userPic);
  card.querySelector("img").src = `./images/${userPic}`;
  card.querySelector("h1").innerText = userName.value;
  card.querySelector(".card-skills").innerText = `Skilled in: ${string}`;
  card.querySelector(".card-description").innerText = userDescription;
});

let resetButton = document
  .querySelector("button")
  .addEventListener("click", () => {
    card.style.display = "none";
  });
