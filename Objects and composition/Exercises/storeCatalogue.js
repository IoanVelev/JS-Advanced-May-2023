function storeCatalogue(input) {
  let sortedProducts = [...input].sort((a, b) => a.localeCompare(b));
  let output = {};
  let copyOfSortedArr = [...sortedProducts];
  for (let currentLine of sortedProducts) {
    let [product, price] = currentLine.split(" : ");
    price = Number(price);
    let firstLetter = product.substring(0, 1);
    arr = [];
    for (currentProduct of copyOfSortedArr) {
      if (currentProduct.charAt(0) === firstLetter) {
        currentProduct.split(" : ");
        arr.push(currentProduct);
      } else {
        output[firstLetter] = arr;
      }
    }
  }
  for (let key in output) {
    console.log(key);
    for (let productInfo of Object.values(output[key])) {
      let product = productInfo.split(" : ").join(": ");
      console.log(`  ${product}`);
    }
  }
}

