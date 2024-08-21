const controller = document.querySelector(".controller");
const buttons = document.querySelectorAll("button");

controller.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    buttons.forEach((button) => button.classList.remove("selected"));

    e.target.classList.toggle("selected");
  }
});

const DEFAULT_SIZE = 4;
function createGrid(size) {
  const gridContainer = document.querySelector(".grid-container");

  // clear container
  gridContainer.innerHTML = "";

  // calculate width and height percentage
  let gridSize = 100 / size;

  for (let i = 0; i < size ** 2; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.flexBasis = `${gridSize}%`;

    gridContainer.appendChild(gridItem);
  }
}

createGrid(DEFAULT_SIZE);
