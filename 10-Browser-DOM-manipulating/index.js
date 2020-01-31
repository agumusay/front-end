const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "design-of-everyday-things.jpg",
    url:
      "https://www.amazon.de/dp/0465050654/ref=sr_1_1?keywords=The+Design+of+EveryDay+Things&qid=1579126709&sr=8-1"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "the-most-human-human.jpg",
    url:
      "https://www.amazon.de/dp/0307476707/ref=sr_1_1?keywords=The+Most+Human+Human&qid=1579126730&sr=8-1"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "thinking-type.jpg",
    url:
      "https://www.amazon.de/dp/1568989695/ref=sr_1_1?keywords=Thinking+with+Type&qid=1579126754&sr=8-1"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "eloquent-javascript.png",
    url:
      "https://www.amazon.de/dp/1593279507/ref=sr_1_1?keywords=Eloquent+JavaScript&qid=1579126773&sr=8-1"
  },
  {
    title: "The Mythical Man-Month",
    author: "Frederick Brooks",
    alreadyRead: true,
    img: "mythical-man-month.jpeg",
    url:
      "https://www.amazon.de/dp/0201835959/ref=sr_1_1?keywords=The+Mythical+Man-Month&qid=1579126790&sr=8-1"
  },
  {
    title: "You Don't Know Js: Up & Going",
    author: "Kyle Simpson",
    alreadyRead: true,
    img: "you-dont-know-js-up-going.jpg",
    url:
      "https://www.amazon.de/dp/1491924462/ref=sr_1_1?keywords=You+Don%27t+Know+Js%3A+Up+%26+Going&qid=1579126805&sr=8-1"
  },
  {
    title: "The Cathedral and the Bazaar",
    author: "Eric S. Raymond",
    alreadyRead: true,
    img: "cathedral-and-the-bazaar.jpg",
    url:
      "https://www.amazon.de/dp/B0182PTVQS/ref=sr_1_2?keywords=The+Cathedral+and+the+Bazaar&qid=1579126823&sr=8-2"
  },
  {
    title: "WTF?: What's the Future and Why It's Up to Us",
    author: "Tim O'Reilly",
    alreadyRead: true,
    img: "cathedral-and-the-bazaar.jpg",
    url:
      "https://www.amazon.de/dp/B01N34IDU6/?coliid=I2WPIXAMMHIOWS&colid=2UDI2D5WXEV7V&psc=0&ref_=lv_ov_lig_dp_it"
  }
];

let body = document.body;

body.style.width = "100vw";
// body.style.height = "100vh";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
let header = document.createElement("h1");
header.innerText = "Francesca's book list";

let container = document.createElement("main");

body.appendChild(header);
body.appendChild(container);

for (let index = 0; index < books.length; index++) {
  const book = books[index];
  let card = document.createElement("section");
  let img = document.createElement("img");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let footer = document.createElement("footer");
  let button = document.createElement("a");
  let textContainer = document.createElement("div");
  container.appendChild(card);

  button.setAttribute("href", book.url);

  author.innerText = book.author;
  title.innerText = book.title;
  img.setAttribute("src", `./images/${book.img}`);

  card.appendChild(img);
  card.appendChild(textContainer);
  textContainer.appendChild(title);
  textContainer.appendChild(author);
  card.appendChild(footer);
  footer.appendChild(button);
  if (book.alreadyRead === true) {
    button.innerText = "Read";
    button.style.backgroundColor = "darkgreen";
  } else {
    button.innerText = "To Read";
    button.style.backgroundColor = "gray";
  }

  button.style.textDecoration = "none";
}
