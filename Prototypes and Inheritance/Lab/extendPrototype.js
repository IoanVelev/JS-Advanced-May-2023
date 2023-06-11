function Person(firstName, email) {
    this.firstName = firstName;
    this.email = email;
}
Person.prototype.toString = function () {
    return `Person (name: ${this.firstName}, email: ${this.email})`
}
function extendConstructor(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}
extendConstructor(Person)
let newPerson = new Person('George', 'Cooper')
console.log(newPerson.toSpeciesString())

