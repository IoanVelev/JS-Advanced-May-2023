function greatestCommonDivisor(num1, num2) {
  let maxNum = Math.max(num1, num2);
  let gcd = 0;
  for (let index = 0; index < maxNum; index++) {
    let currentEl = index;
    if (num1 % currentEl == 0 && num2 % currentEl == 0) {
      gcd = currentEl;
    }
  }
  console.log(gcd);
}
greatestCommonDivisor(2154, 458);
