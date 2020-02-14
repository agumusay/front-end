let container = document.querySelector(".action-button");

// let toggleOpen = el => {
//   el.dataset.dropdown = el.dataset.dropdown === "open" ? "closed" : "open";
// };
container.addEventListener("click", event => {
  event.currentTarget.classList.toggle("selected");

  if (event.target.dataset.dropdown === "closed") {
    event.target.dataset.dropdown = "open";
    event.stopPropagation();
  } else {
    event.target.dataset.dropdown = "closed";
    event.stopPropagation();
  }
});

document.addEventListener("click", event => {
  document.querySelector("[data-dropdown]").dataset.dropdown = "closed";
});
