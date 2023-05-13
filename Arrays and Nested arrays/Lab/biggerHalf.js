function biggerHalf(input) {
  input = input.sort((a, b) => a - b);
  if (input.length % 2 == 0) {
    let index = input.length / 2;
    input = input.slice(index);
  } else {
    let index = Math.floor(input.length / 2);
    input = input.slice(index);
  }
  return (input);
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
