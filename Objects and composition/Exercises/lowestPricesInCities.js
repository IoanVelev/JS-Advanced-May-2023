function lowestPricesInCities(input) {
  let output = {};
  for (let line of input) {
    arr = [];
    let [town, product, price] = line.split(" | ");
    price = Number(price);
    arr.push(price, town);
    if (!output.hasOwnProperty(product)) {
      output[product] = arr;
    } else {
      if (output[product][0] > price) {
        output[product] = arr;
      }
    }
  }
  for (let key in output) {
    console.log(`${key} -> ${output[key][0]} (${output[key][1]})`);
  }
}

