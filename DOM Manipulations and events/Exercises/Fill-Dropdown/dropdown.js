function addItem() {
  let newItemText = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");

  let option = document.createElement("option");
  option.textContent = newItemText.value;
  option.value = newItemValue.value;
  let menu = document.getElementById("menu");
  if (option.textContent !== "" && option.value !== "") {
    menu.appendChild(option);
  }
  newItemText.value = "";
  newItemValue.value = "";
}
