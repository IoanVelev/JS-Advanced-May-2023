function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let textInput = JSON.parse(
      document.querySelector("#inputs textarea").value);
    let outputText = document.querySelector("#bestRestaurant p");
    let outputText2 = document.querySelector("#workers p");
    let obj = {};
    let avgSalary = 0;
    let totalSalary = 0;
    let currentAvgSalary = 0;
    let bestName = "";
    let bestSalary = 0;
    for (let currentLine of textInput) {
      let [restaurantName, workersData] = currentLine.split(" - ");
      workersData = workersData.split(", ");
      for (let currentWorker of workersData) {
        let [name, salary] = currentWorker.split(" ");
        salary = Number(salary);
        if (!obj.hasOwnProperty(restaurantName)) {
          obj[restaurantName] = {};
        }
        if (obj.hasOwnProperty(restaurantName)) {
          obj[restaurantName][name] = salary;
        }
      }
    }
    let entries = Object.entries(obj);
    for (let entry of entries) {
      totalSalary = 0;
      let name = entry[0];
      let salaries = Object.values(entry[1]).map((s) => (totalSalary += s));
      currentAvgSalary = totalSalary / salaries.length;
      if (currentAvgSalary > avgSalary) {
        avgSalary = currentAvgSalary.toFixed(2);
        bestName = name;
        bestSalary = Math.max(...Object.values(entry[1])).toFixed(2);
      }
    }
    let sortedBySalary = Object.entries(obj[bestName]).sort(
      (a, b) => b[1] - a[1]
    );
    outputText.textContent = `Name: ${bestName} Average Salary: ${avgSalary} Best Salary: ${bestSalary}`;
    for (let currentArr of sortedBySalary) {
      let person = currentArr[0];
      let salary = currentArr[1];
      outputText2.textContent += `Name: ${person} With Salary: ${salary} `;
    }
  }
}
