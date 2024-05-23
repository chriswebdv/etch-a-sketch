let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
  console.log(square);
  for (let j = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    console.log(square);
  }
}

// change the colors of the divs
let color = [
  ,
  "#3C9EE7",
  "#E7993C",
  "#E73C99",
  "#3CE746",
  "#E7993C",
  "#FF3333",
];

document.querySelector("div").addEventListener("mouseover", function () {
  document.querySelector("div").style.background =
    color[Math.floor(Math.random() * color.length)];
});

document.querySelector("div").addEventListener("mouseout", function () {
  document.querySelector("div").style.background =
    color[Math.floor(Math.random() * color.length)];
});
