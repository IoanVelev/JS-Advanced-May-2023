function magicMatrices(input) {
  let rowOutput = true;
  let columnOutput = true;
  let sum = 0;
  let rowSum = 0;
  let columnSum = 0;
  input[0].map((x) => (sum += x));
  for (let currentArr of input) {
    rowSum = 0;
    currentArr.map((x) => (rowSum += x));
    if (sum !== rowSum) {
      rowOutput = false;
      break;
    }
  }
  for (let index = 0; index < input.length; index++) {
    for (let j = 0; j < 1; j++) {
      columnSum += input[index].shift();
    }
    if (index == input.length - 1) {
      index = -1;
      if (columnSum !== rowSum) {
        columnOutput = false;
        break;
      } else {
        columnOutput = true;
      }
      columnSum = 0;
    }
    if (input[input.length - 1].length < 1) {
      break;
    }
  }
  if (rowOutput == true && columnOutput == true) {
    console.log(true);
  } else {
    console.log(false);
  }
}
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
