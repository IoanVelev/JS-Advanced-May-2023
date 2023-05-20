function jansNotation(arr) {
  let res = [];
  let numbers = [];
  let operators = [];
  let operationObj = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  for (let el of arr) {
    if (isNaN(el)) {
      operators.push(el);
    } else {
      numbers.push(el);
    }
  }
  if (numbers.length === operators.length || numbers.length < 2) {
    console.log("Error: not enough operands!");
    return;
  } else if (operators.length < numbers.length - 1) {
    console.log("Error: too many operands!");
    return;
  }
  for (let iterator of arr) {
    if (!isNaN(iterator)) {
      res.push(iterator);
      continue;
    }
    let numA = res.pop();
    let numB = res.pop();
    let result = operationObj[iterator](numB, numA);
    res.push(result);
  }
  console.log(res.join());
}

