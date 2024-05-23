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

square.addEventListener("mouseover", (event) => {
  event.target.style.backroundColor = "yellow";
});

square.addEventListener("mouseout", (event) => {
  event.target.style.backroundColor = "lightgreen";
});
