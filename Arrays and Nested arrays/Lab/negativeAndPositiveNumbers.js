function negativeAndPositiveNumbers(arr) {
  let newArr = [];
  for (let num of arr) {
    if (num < 0) {
      newArr.unshift(num);
    } else {
      newArr.push(num);
    }
  }
  newArr.map((x) => console.log(x));
}
negativeAndPositiveNumbers([7, -2, 8, 9]);
