let img = document.createElement("img");
let body = document.body;
body.appendChild(img);

img.setAttribute("src", "./images/andrew-EaWQhMX82JM-unsplash.jpg");
img.style.width = "800px";
img.style.height = "600px";

let pathsOfImages = [
  "./images/andrew-EaWQhMX82JM-unsplash.jpg",
  "./images/cameron-venti-BX98Q1bW2Fw-unsplash.jpg",
  "./images/d-ng-tr-n-qu-c-AAmYBHqbAEs-unsplash.jpg",
  "./images/emre-ozturk-MWq-cZ6jOA4-unsplash.jpg",
  "./images/luca-carra-pbgmlj-wsk4-unsplash.jpg",
  "./images/niklas-liniger-BZpt3Qn09WQ-unsplash.jpg"
];

let switchEveryTwoSeconds = setInterval(() => {
  let counter = Math.floor(Math.random() * pathsOfImages.length);

  img.setAttribute("src", `${pathsOfImages[counter]}`);
  img.setAttribute("title", `${pathsOfImages[counter].split("/")[2]}`);
}, 1000);
