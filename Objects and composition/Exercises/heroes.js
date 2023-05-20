function solve() {
  // Create mage object
  let mageHero = {
    // proto for mage
    mageProto: {
      cast: function (spell) {
        this.mana -= 1;
        console.log(`${this.name} cast ${spell}`);
      },
    },
    // Mage constructor
    mage: function (name) {
      let mageObj = {
        ...this.mageProto,
        name,
        mana: 100,
        health: 100,
      };
      return mageObj;
    },
  };
  // fighter object
  let fighterHero = {
    // proto for fighter
    fighterProto: {
      fight: function () {
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
      },
    },
    // fighter constructor
    fighter: function (name) {
      let fighterObj = {
        ...this.fighterProto,
        name,
        health: 100,
        stamina: 100,
      };
      return fighterObj;
    },
  };
  let allHeroes = {
    ...mageHero,
    ...fighterHero,
  };
  return allHeroes;
}

