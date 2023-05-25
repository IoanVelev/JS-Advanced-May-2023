function generateReport() {
  let tableRows = document.querySelectorAll("tbody tr");
  let tableHeader = document.querySelectorAll("thead tr th");
  let result = [];
  for (let j = 0; j < tableRows.length; j++) {
    let currentRowElement = tableRows[j].cells;
    let obj = {};
    for (let index = 0; index < tableHeader.length; index++) {
      let currentHeader = tableHeader[index].childNodes[0].textContent.trim().toLowerCase();
      let status = tableHeader[index].childNodes[1];
      if (status.checked === true) {
        obj[currentHeader] = currentRowElement[index].textContent;
        console.log(obj);
      }
    }
    result.push(obj);
  }
  let jsonRes = JSON.stringify(result);
  document.getElementById("output").textContent = jsonRes;
}
