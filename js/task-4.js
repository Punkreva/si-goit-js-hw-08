const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };

  if (info.email === "" || info.password === "") {
    return alert("All form fields must be filled in");
  } else {
    console.log(info);
  };

  registerForm.reset();
};