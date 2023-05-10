function lastkKNumbersSequence(n, k) {
  let arr = [1];
  for (let index = 0; index < n - 1; index++) {
    let sum = 0;
    let el = arr[index];
    if (arr.length > k) {
      let i = arr.length - k;
      arr.slice(i).map((x) => (sum += x));
      arr.push(sum);
    } else {
      arr.map((x) => (sum += x));
      arr.push(sum);
    }
  }
  return arr;
}
console.log(lastkKNumbersSequence(6, 3));
