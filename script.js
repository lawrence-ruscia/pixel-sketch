const DEFAULT_SIZE = 16;
const DEFAULT_COLOR_PICKER_VALUE = "#393e46";
const DEFAULT_GRID_BACKGROUND = "white";

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

function activateMode(type) {
  const gridContainer = document.querySelector(".grid-container");

  let changeBackgroundColor = (e) => {
    let targetGridItem = e.target;

    if (type === "color") {
      applyColor(targetGridItem);
    }
    if (type === "rainbow") {
      applyRGBColor(targetGridItem);
    }
    if (type === "eraser") {
      applyEraserColor(targetGridItem);
    }
  };

  gridContainer.addEventListener("mouseover", changeBackgroundColor);
}

function applyColor(target) {
  const colorPicker = document.querySelector(".color-picker");

  target.style.backgroundColor = colorPicker.value;
}

function applyRGBColor(target) {
  target.style.backgroundColor = getRandomRGB();
}

function applyEraserColor(target) {
  target.style.backgroundColor = DEFAULT_GRID_BACKGROUND;
}

function getRandomRGB() {
  let randomRGBValue = () => Math.floor(Math.random() * 256);

  let r = randomRGBValue();
  let g = randomRGBValue();
  let b = randomRGBValue();

  return `rgb(${r}, ${g}, ${b})`;
}

function determineMode() {
  const controller = document.querySelector(".controller");

  controller.addEventListener("click", (e) => {
    if (e.target.classList.contains("color-mode")) {
      activateMode("color");
    }
    if (e.target.classList.contains("rainbow-mode")) {
      activateMode("rainbow");
    }
    if (e.target.classList.contains("eraser")) {
      activateMode("eraser");
    }
  });
}

highlightSelectedButton();
changeGridSize();
determineMode();
