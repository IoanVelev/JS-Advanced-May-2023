function autoEngineeringCompany(input) {
  let brands = {};
  while (input.length > 0) {
    let [carBrand, carModel, producedCars] = input.shift().split(" | ");
    producedCars = Number(producedCars);
    if (!brands.hasOwnProperty(carBrand)) {
        brands[carBrand] = {}
    } if (!brands[carBrand].hasOwnProperty(carModel)) {
        brands[carBrand][carModel] = 0;
    } 
        brands[carBrand][carModel] += producedCars;
  }
  let keys = Object.entries(brands);
  for (let key of keys) {
    console.log(key[0]);
    let values = Object.entries(key[1]);
    for (let value of values) {
        console.log(`###${value[0]} -> ${value[1]}`);
    }
  }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);
