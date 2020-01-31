let wrapper = document.getElementById("wrapper");
let firstLevelChildren = Array.from(wrapper.children);

let secondLevelChildren = firstLevelChildren.map(child => {
  console.log(child.children);
  console.log(child.childElementCount);
});
//-------------------------------------------
lengths = firstLevelChildren.map(child => {
  return child.classList.length;
});

let foundLength = Math.max(...lengths);

let foundObj = firstLevelChildren.filter(child => {
  return firstLevelChildren.indexOf(child) === lengths.indexOf(foundLength);
});

let result = {
  element: foundObj[0],
  length: foundLength
};

console.log(result);
