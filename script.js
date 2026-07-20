let container = document.querySelector("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "640px";
container.style.position = "relative";

for (let i = 0; i <= 255; i++) {
  let divSquare = document.createElement("div");
  divSquare.classList.add("grid-square");
  divSquare.style.width = "40px";
  divSquare.style.height = "40px";
  divSquare.style.border = "1px solid black";
  divSquare.style.boxSizing = "border-box"; // Ensures borders don't break the layout

  divSquare.addEventListener("mouseover", (e) => {
    divSquare.style.background = "black";
  });

  container.appendChild(divSquare);
}

// BUTTON
let btn = document.createElement("button");
btn.textContent = "CLEAR";
btn.style.width = "100px";
btn.style.height = "50px";
document.body.insertBefore(btn, container);

btn.addEventListener("click", (e) => {
  let num = prompt("Enter a number of squares per side");
  totalSquares = num * num;
  const oldSquares = container.querySelectorAll(".grid-square");
  const oldSquares1 = container.querySelectorAll(".new-grid");
  oldSquares.forEach((square) => square.remove());
  oldSquares1.forEach((square) => square.remove());

  for (let i = 0; i < totalSquares; i++) {
    let newGrid = document.createElement("div");
    newGrid.classList.add("new-grid");
    let size = 640 / num;
    newGrid.style.width = size + "px";
    newGrid.style.height = size + "px";
    newGrid.style.boxSizing = "border-box"; // Ensures borders don't break the layout
    newGrid.style.border = "1px solid black";

    newGrid.addEventListener("mouseover", (e) => {
      newGrid.style.background = "black";
    });

    container.appendChild(newGrid);
  }
});
