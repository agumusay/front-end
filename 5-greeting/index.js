let askName = prompt("Please enter your name");
let body = document.body;
let askFavoriteColor = prompt(`Enter your favorite color (optional)`);
if (askName) {
  body.innerHTML = `<h1>Hello <span>${askName}</span>.</h1>`;
  let span = document.querySelector("h1 span");
  if (askFavoriteColor) {
    span.style.color = `${askFavoriteColor}`;
  } else {
    span.style.color = "hotpink";
  }
} else {
  body.innerHTML = `<h1>Hello  <span>Stranger</span>.</h1>`;
  let span = document.querySelector("h1 span");
  if (askFavoriteColor) {
    span.style.color = `${askFavoriteColor}`;
  } else {
    span.style.color = "hotpink";
  }
}
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundImage = "url(https://picsum.photos/1280/854)";
body.style.backgroundSize = "cover";
