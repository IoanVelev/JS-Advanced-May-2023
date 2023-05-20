function sumTable() {
  let costElements = document.querySelectorAll("tr td:nth-of-type(2)");
  let finalSum = 0;
  Array.from(costElements).forEach((currentSum) => {
    finalSum += Number(currentSum.textContent);
    console.log(finalSum);
  });
  let sumFinalPrice = document.getElementById("sum");
  sumFinalPrice.textContent = finalSum;
}
