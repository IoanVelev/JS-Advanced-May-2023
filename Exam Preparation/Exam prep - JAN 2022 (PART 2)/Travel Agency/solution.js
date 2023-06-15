window.addEventListener("load", solution);

function solution() {
  let submitButton = document.getElementById("submitBTN");
  let editButton = document.getElementById("editBTN");
  let continueButton = document.getElementById("continueBTN");
  let infoPreview = document.getElementById("infoPreview");
  let inputFields = Array.from(
    document.getElementById("form").querySelectorAll("div")
  );
  let block = document.getElementById("block");
  submitButton.addEventListener("click", () => {
    let fullName = inputFields[0].children[1].value;
    let email = inputFields[1].children[1].value;
    if (fullName !== "" && email !== "") {
      for (const el of inputFields) {
        let listedItem = document.createElement("li");
        listedItem.textContent = `${el.children[0].textContent} ${el.children[1].value}`;
        infoPreview.appendChild(listedItem);
        el.children[1].value = "";
      }
      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  });
  editButton.addEventListener("click", () => {
    let listedItems = infoPreview.children;
    for (let index = 0; index < listedItems.length; index++) {
      let liItemValue = listedItems[index].textContent.split(": ")[1];
      inputFields[index].children[1].value = liItemValue;
    }
    while (infoPreview.firstChild) {
      infoPreview.firstChild.remove();
    }
    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });
  continueButton.addEventListener("click", () => {
    while (block.firstChild) {
      block.firstChild.remove();
    }
    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";
    block.appendChild(h3);
  });
}
