function calorieObject(input) {
  let output = {};
  for (let index = 0; index < input.length; index += 2) {
    let food = input[index];
    let calories = input[index + 1];
    output[food] = Number(calories);
  }
  console.log(output);
}

