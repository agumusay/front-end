document.querySelector(".multi-button").addEventListener("click", event => {
  let span = event.target.closest("button").querySelector("span");

  if (event.target.closest("button").dataset.action === "copy") {
    span.innerText = "Copied!";
    setTimeout(() => {
      span.innerText = "Copy";
    }, 1000);
  }
  if (event.target.closest("button").dataset.action === "paste") {
    span.innerText = "Pasted!";
    setTimeout(() => {
      span.innerText = "Paste";
    }, 1000);
  }
  if (event.target.closest("button").dataset.action === "cut") {
    span.innerText = "Cut!";
    setTimeout(() => {
      span.innerText = "Cut";
    }, 1000);
  }
});
