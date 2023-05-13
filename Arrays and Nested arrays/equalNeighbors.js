function equalNeighbors(input) {
  let sumOfPairs = 0;
  for (let index = 0; index < input.length; index++) {
    let currentArr = input[index];
    let nextArr = input[index + 1];
    for (let index = 0; index < currentArr.length; index++) {
      let currentEl = currentArr[index];
      let nextEl = currentArr[index + 1];
      if (currentEl === nextEl) {
        sumOfPairs++;
      }
      if (nextArr !== undefined) {
        if (nextArr.includes(currentEl)) {
            let i = index;
            let nextArrEl = nextArr.slice(i, i + 1).join(" ");
            if (currentEl === nextArrEl) {
              sumOfPairs++;
            }
          }
      }
    }
  }
  return sumOfPairs;
}
console.log(
  equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
  ])
);
