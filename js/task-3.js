const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const changeOutputName = (event) => {
   let trimValue = event.currentTarget.value.trim();
    outputName.textContent = trimValue.length > 0 ? trimValue : "Anonymous";
};

inputName.addEventListener("input", changeOutputName);