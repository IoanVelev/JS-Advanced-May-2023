function solve() {
  let userText = document.getElementById("text").value;
  let nameConvention = document.getElementById("naming-convention").value;
  let result = userText.split(" ");
  if (nameConvention === "Camel Case") {
    result[0] = result[0].toLowerCase()
    for (let index = 1; index < result.length; index++) {
      result[index] = result[index][0].toUpperCase() + result[index].slice(1).toLowerCase();
    }
    result = result.join("");
  } else if (nameConvention === "Pascal Case") {
    for (let i = 0; i < result.length; i++) {
      result[i] = result[i][0].toUpperCase() + result[i].slice(1).toLowerCase();
    }
    result = result.join("");
  } else {
    result = "Error!";
  }

  let finalResult = document.getElementById("result");
  finalResult.textContent = result;
}
