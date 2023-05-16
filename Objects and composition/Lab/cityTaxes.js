function cityTaxes(name, population, treasury) {
  let record = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(){
        this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage){
        percentage /= 100;
        this.population += percentage * this.population;
    },
    applyRecession(percentage){
        percentage /= 100;
        this.treasury -= this.treasury * percentage;
    }
  };
  return record;
}

