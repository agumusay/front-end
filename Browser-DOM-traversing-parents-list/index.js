// let nodes = [];

// let cite = document.querySelector("cite");

// nodes.push(cite);
// let string = "";
// while (cite.parentNode) {
//   nodes.unshift(cite.parentNode.nodeName);
//   cite = cite.parentNode;
// }

// console.log(nodes.join(">").toLocaleLowerCase());
// let nodeList = [document.querySelector("cite")];
// while (nodeList[nodeList.length - 1].parentNode !== document) {
//   nodeList.unshift(nodeList[nodeList.length - 1].parentNode);
// }

// console.log(nodeList);

let cite = document.querySelector("cite");

let parents = [];
let classes = [];

while (cite.parentNode) {
  classes.unshift(cite.className || cite.parentNode.className);
  parents.unshift(cite.nodeName || cite.parentNode.nodeName);

  cite = cite.parentNode;
}
let result = parents.slice(1).join(" > ");
let result2 = classes.slice(1).join(" > ");
console.log(result.toLocaleLowerCase(), result2);
