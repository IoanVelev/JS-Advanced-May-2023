function smallestTwoNumbers(arr) {
  let output = [];
  for (let index = 0; index < 2; index++) {
    let currentSmallestEl = Math.min(...arr);
    arr.splice(arr.indexOf(currentSmallestEl), 1);
    output.push(currentSmallestEl);
  }
  console.log(output.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);
