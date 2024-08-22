const DEFAULT_SIZE = 16;
const DEFAULT_BACKGROUND_COLOR = "#393e46";

function highlightSelectedButton() {
  const controller = document.querySelector(".controller");
  const buttons = document.querySelectorAll("button");

  controller.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      buttons.forEach((button) => button.classList.remove("selected"));

      e.target.classList.toggle("selected");
    }
  });
}

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

function changeGridSize() {
  const sliderSize = document.querySelector(".slider-size");

  createGrid(DEFAULT_SIZE);

  sliderSize.addEventListener("input", () => {
    let size = sliderSize.value;
    createGrid(size);
    changeSizeText(size);
  });
}

<<<<<<< HEAD
=======
function changeSizeText(size) {
  const gridSize = document.querySelector(".grid-size");
  gridSize.querySelector("p").textContent = `${size} x ${size}`;
}

function changeRainbowColor() {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.addEventListener("mouseover", () => {
    addGridItemColor(getRandomRGB());
  });
}

function getRandomRGB() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string

  return rgb;
}

>>>>>>> parent of 527501e (Revert "Add feature that changes text based on slider value")
highlightSelectedButton();
changeGridSize();
