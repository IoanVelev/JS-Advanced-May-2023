function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
  generateBtn.addEventListener("click", onClickGenerate);
  buyBtn.addEventListener("click", onClickBuy);

  function onClickGenerate() {
    let input = JSON.parse(document.querySelector("textarea").value);
    input.forEach((element) => {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let img = document.createElement("img");
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let p1 = document.createElement("p");
      let td2 = document.createElement("td");
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let p2 = document.createElement("p");
      let td3 = document.createElement("td");
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let p3 = document.createElement("p");
      let td4 = document.createElement("td");
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement("td");
      let input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector("tbody").appendChild(tr);
    });
  }

  function onClickBuy() {
    let checkBoxes = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((x) => x.checked);
    let boughtItems = [];
    let finalPrice = 0;
    let decorationSum = 0;
    checkBoxes.forEach((el) => {
      let parent = el.parentElement.parentElement;
      let item = parent.querySelectorAll("p")[0].textContent;
      let price = Number(parent.querySelectorAll("p")[1].textContent);
      let decoration = Number(parent.querySelectorAll("p")[2].textContent);
      boughtItems.push(item);
      finalPrice += price;
      decorationSum += decoration;
    });
    let output = document.querySelectorAll("textarea")[1];
    console.log(output);
    output.textContent += `Bought furniture: ${boughtItems.join(", ")}\n`;
    output.textContent += `Total price: ${finalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${
      decorationSum / checkBoxes.length
    }`;
  }
}
