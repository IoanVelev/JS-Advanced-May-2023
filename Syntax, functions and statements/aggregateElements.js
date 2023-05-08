function aggregateElements(input){
let sumOfElements = 0;
let sumOfReverseValues = 0;
let concat = '';
input.map(x => sumOfElements += x);
input.map(x => sumOfReverseValues += 1 / x);
input.map(x => concat += String(x));
console.log(sumOfElements);
console.log(sumOfReverseValues);
console.log(concat);
}
aggregateElements([1, 2, 3])