class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw Error("Not enough space in the garden.")
        }
        let obj = { plantName, spaceRequired, ripe: false, quantity: 0 };
        this.plants.push(obj);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const found = this.plants.find(el => el.plantName === plantName);

        if (!found) {
            throw Error(`There is no ${plantName} in the garden.`)
        }

        if (found.ripe === true) {
            throw Error(`The ${plantName} is already ripe.`)
        }

        if (quantity <= 0) {
            throw Error("The quantity cannot be zero or negative.")
        }

        found.ripe = true;
        found.quantity += quantity;
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else if(quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName){
        const found = this.plants.find(el => el.plantName === plantName);

        if (!found) {
            throw Error(`There is no ${plantName} in the garden.`)
        }
        if (found.ripe === false) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        const index = this.plants.findIndex( object => {
            return object === found
        })
        let quantity = found.quantity
        this.storage.push({ plantName, quantity });
        this.spaceAvailable += found.spaceRequired;
        this.plants.splice(index, 1); 
        return `The ${plantName} has been successfully harvested.`
    }
    generateReport(){
        let output = [];
        let storage = [];
        let plants = '';
        plants += 'Plants in the garden: '
        output.push(`The garden has ${this.spaceAvailable} free space left.`);
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
        for (let index = 0; index < sortedPlants.length; index++) {
            if (index === sortedPlants.length - 1) {
                plants += sortedPlants[index].plantName
            } else {
                plants += sortedPlants[index].plantName + ', '
            }
        }
        output.push(plants)
        if (this.storage.length === 0) {
            output.push("Plants in storage: The storage is empty.");
        } else{
            storage.push("Plants in storage: ")
            for (let index = 0; index < this.storage.length; index++) {
                if (index ===  this.storage.length - 1) {
                    storage.push(`${this.storage[index].plantName} (${this.storage[index].quantity})`)
                } else{
                    storage.push(`${this.storage[index].plantName} (${this.storage[index].quantity}), `)
                }
                
            }
        }
        output.push(storage.join(""))
        return output.join('\n')
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());



