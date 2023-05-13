function squareOfStars(param) {
  if (param === undefined) {
    param = 5;
  }
  for (let index = 0; index < param; index++) {
    let res = '';
    for (let j = 0; j < param; j++) {
      res += '* ';
    }
    console.log(res);
  }
}
squareOfStars(5);
