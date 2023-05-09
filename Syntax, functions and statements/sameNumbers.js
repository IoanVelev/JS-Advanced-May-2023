function sameNumbers(input) {
  let arr = [...String(input)].map(x => Number(x));
  let firstChar = arr[0];
  let res = true;
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    let el = arr[index];
    if (el !== firstChar) {
      res = false;
      break;
    }
  }
  arr.map(x => sum += x);
  console.log(res);
  console.log(sum);
}
sameNumbers(1234);
