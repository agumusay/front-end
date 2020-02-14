const buttonContainer = document
  .querySelector("section")
  .addEventListener("click", event => {
    event.currentTarget.style.backgroundColor = "hotpink";
    if (
      event.target.closest("button") &&
      event.target.closest("button").dataset.action
    ) {
      event.target.closest("button").dataset.action;
      event.currentTarget.style.backgroundColor = "yellow";
    }
  });
