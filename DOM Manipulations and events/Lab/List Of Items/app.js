function addItem() {
  let itemsElement = document.getElementById("items");
  let createdElement = document.createElement("li");
  let inputValue = document.getElementById("newItemText");

  createdElement.textContent = inputValue.value;
  itemsElement.appendChild(createdElement);
}
