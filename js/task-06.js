const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputChangeColor);

function inputChangeColor(event) {
  const contentInput = event.currentTarget.value;
  input.classList.remove("invalid", "valid");
  const changeColor =
    contentInput.length === Number(input.dataset.length)
      ? input.classList.add("valid")
      : input.classList.add("invalid");
  console.log(changeColor);
}