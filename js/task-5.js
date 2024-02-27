function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  const body = document.querySelector("body");
  const spanTextColor = document.querySelector(".color");
  const color = getRandomHexColor();
  
  body.style.backgroundColor = color;
  spanTextColor.textContent = color;
});