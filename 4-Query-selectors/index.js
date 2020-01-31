console.log(`
------------------------1-----------------------
`);

let linkElements = Array.from(document.querySelectorAll("a"));
console.log(linkElements.length);

console.log(`
------------------------2-----------------------
`);

let paragraphElements = Array.from(document.querySelectorAll("p"));
let secondWord = paragraphElements.map(
  element => element.innerText.split(" ")[1] || "No Second Word"
);
console.log(secondWord);

console.log(`
------------------------3-----------------------
`);

let internalLinks = Array.from(document.querySelectorAll('a[href^= "#"]'));
console.log(internalLinks);
let hashOfLinks = internalLinks.map(x =>
  Array.from(document.querySelectorAll(x.getAttribute("href")))
);
console.log(hashOfLinks);
let textOfElements = hashOfLinks.map(x1 => (x1[0] ? x1[0].innerText : ""));
console.log(textOfElements);

console.log(`
------------------------4-----------------------
`);

let linkElements2 = Array.from(document.querySelectorAll("a"));
console.log(linkElements2[0].getAttribute("href"), linkElements2[0].innerText);
console.log(
  linkElements2[linkElements2.length - 1].getAttribute("href"),
  linkElements2[linkElements2.length - 1].innerText
);

console.log(`
------------------------5-----------------------
`);

let externalLinks = Array.from(document.querySelectorAll("a[href^=http]"));
externalLinks.map(element => element.setAttribute("target", "_blank"));
console.log(externalLinks);
