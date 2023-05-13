function extractIncreasingSubsequence(input) {
  let currentBiggest = input[0];
  let arr = [currentBiggest];
  input.reduce((accumulator, currentValue) => {
    if (currentValue >= currentBiggest) {
        currentBiggest = currentValue
      arr.push(currentValue);
    }
  });
  return arr;
}
console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
