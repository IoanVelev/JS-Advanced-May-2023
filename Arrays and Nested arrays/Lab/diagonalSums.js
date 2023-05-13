function diagonalSum(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let index = 0; index < arr.length; index++) {
    let i = index - 1 + 1;
    let currentElement = arr[index][i];
    sum1 += currentElement;
  }
  for (let index = 0; index < arr.length; index++) {
    let i = arr[index].length - 1 - index;
    let currentElement = arr[index][i];
    sum2 += currentElement;
  }
  let output = [sum1, sum2];
  console.log(output.join(" "));
}
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
