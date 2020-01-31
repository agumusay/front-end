let innerInput = document.querySelector("#input").innerHTML;

document.querySelector("#output").innerHTML = innerInput.replace(/</g, "&lt;");
