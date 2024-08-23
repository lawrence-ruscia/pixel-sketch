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

/*
  Create mouseover event on grid-container
  change target div's background color based on colorPicker value
*/
function activateColorMode() {
  const gridContainer = document.querySelector(".grid-container");

  let changeBackgroundColor = (e) => {
    let targetGridItem = e.target;
    applyColor(targetGridItem);
  };

  gridContainer.addEventListener("mouseover", changeBackgroundColor);
}

function applyColor(target) {
  const colorPicker = document.querySelector(".color-picker");

  target.style.backgroundColor = colorPicker.value;
}

function activateRainbowMode() {}

function getRandomRGB() {
  let randomRGBValue = () => Math.floor(Math.random() * 255) + 1;

  let r = randomRGBValue();
  let g = randomRGBValue();
  let b = randomRGBValue();

  return `rgb(${r}, ${g}, ${b})`;
}

function determineMode() {
  const controller = document.querySelector(".controller");

  controller.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-mode")) {
      activateColorMode();
    }
  });
}

highlightSelectedButton();
changeGridSize();
determineMode();
