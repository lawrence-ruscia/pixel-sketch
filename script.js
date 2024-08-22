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

function changeSizeText(size) {
  const gridSize = document.querySelector(".grid-size");
  gridSize.querySelector("p").textContent = `${size} x ${size}`;
}

function changeColorMode() {
  const colorPicker = document.querySelector(".color-picker");
  // Remove any existing event listeners to prevent multiple handlers
  gridContainer.removeEventListener("mouseover", applyRainbowColor);
  gridContainer.removeEventListener("mouseover", applySelectedColor);

  // Add the new event listener
  colorPicker.addEventListener("input", applySelectedColor);
}

function addSelectedColor(e) {
  const selectedColor = e.target.value;
  const gridContainer = document.querySelector(".grid-container");

  function applyColor(e) {
    e.target.style.backgroundColor = selectedColor;
  }

  gridContainer.addEventListener("mouseover", applyColor);
}

function determineMode() {
  const controller = document.querySelector(".controller");

  controller.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-mode")) {
      changeColorMode();
    } else if (e.target.classList.contains("rainbow-mode")) {
      changeRainbowMode();
    }
  });
}

function changeRainbowMode() {
  const gridContainer = document.querySelector(".grid-container");

  // Remove any existing event listeners to prevent multiple handlers
  gridContainer.removeEventListener("mouseover", applySelectedColor);
  gridContainer.removeEventListener("mouseover", applyRainbowColor);

  function applyRainbowColor(e) {
    e.target.style.backgroundColor = getRandomRGB();
  }
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

highlightSelectedButton();
changeGridSize();
determineMode();
