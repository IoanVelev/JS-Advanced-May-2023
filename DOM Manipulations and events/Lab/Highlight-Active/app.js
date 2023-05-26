function focused() {
  let textInputs = document.querySelectorAll("div input");
  let arrTextInputs = Array.from(textInputs);
  for (let currentInput of arrTextInputs) {
    currentInput.addEventListener("focus", () => {
      currentInput.parentNode.classList.add("focused");
    });

    currentInput.addEventListener("blur", () => {
      currentInput.parentNode.classList.remove("focused");
    });
  }
}
