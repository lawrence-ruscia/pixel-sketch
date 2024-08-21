const controller = document.querySelector(".controller");
const buttons = document.querySelectorAll("button");

controller.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    buttons.forEach((button) => button.classList.remove("selected"));

    e.target.classList.toggle("selected");
  }
});
