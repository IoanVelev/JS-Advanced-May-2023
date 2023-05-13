function printEveryNthElement(arr, num) {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    if (index % num === 0) {
      output.push(arr[index]);
    }
  }
  return output;
}
console.log(printEveryNthElement(["5", "20", "31", "4", "20"], 2));
