function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  const inputNum = Number(input.value);
  if (inputNum >= 1 && inputNum <= 100) {
    boxes.innerHTML = "";
    let boxSize = 30;

    for (let i = 0; i < inputNum; i++) { 
      let div = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
      boxes.insertAdjacentHTML("beforeend", div);
      boxSize += 10;
    }
    input.value = '';
  }
});

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
