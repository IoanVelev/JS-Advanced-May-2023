function fruit(fruit, weight, pricePerKg) {
    let money = weight / 1000 * pricePerKg;
    weight = weight / 1000;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)