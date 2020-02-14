let isDrawing = false;

let x = 0;
let y = 0;
const canvas = document.getElementById("myPics");
const context = canvas.getContext("2d");
const canvasBox = canvas.getBoundingClientRect();
let colorPicker = document.getElementById("color-picker");
const reset = document.getElementById("button");

reset.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", event => {
  x = event.clientX - canvasBox.left;
  y = event.clientY - canvasBox.top;
  isDrawing = true;
});

let width;
let hue;
let result = 1;
let step = 1;
let result2 = 1;
let step2 = 1;
let upDown = upperLimit => {
  let floor = 1;
  result += step;
  if (result === upperLimit || result === floor) {
    step = -step;
  }
  return result;
};
let upDown2 = upperLimit2 => {
  let floor = 1;
  result2 += step2;
  if (result2 === upperLimit2 || result2 === floor) {
    step2 = -step2;
  }
  return result2;
};
canvas.addEventListener("mousemove", event => {
  width = upDown(30);
  hue = upDown2(360);

  if (isDrawing === true) {
    drawLine(
      context,
      x,
      y,
      event.clientX - canvasBox.left,
      event.clientY - canvasBox.top
    );
    x = event.clientX - canvasBox.left;
    y = event.clientY - canvasBox.top;
  }
});

window.addEventListener("mouseup", event => {
  if (isDrawing === true) {
    drawLine(
      context,
      x,
      y,
      event.clientX - canvasBox.left,
      event.clientY - canvasBox.top
    );
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.lineCap = "round";
  context.strokeStyle = colorPicker.value;
  context.lineWidth = 20;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
