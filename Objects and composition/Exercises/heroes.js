function solve() {
let health = 100;
let stamina = 100;
let mana = 100;
let create = {
  fighter: function(name) {
    return (obj = {
      name,
      health,
      stamina,
      fight: function() {
        this.stamina -= 1;
        console.log(`${this.name} slashes at the foe!`);
      },
    });
  },
  mage: function(name) {
    return(obj = {
      name,
      health,
      mana,
      cast: function(spellName){
        this.mana -= 1;
        console.log(`${this.name} cast ${spellName}`
        );
      }
    })
  }
}
return create;
}

