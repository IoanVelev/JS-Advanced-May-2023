function largestNumber(num1, num2, num3){
let arr = [num1, num2, num3];
let res = Math.max(...arr)
console.log(`The largest number is ${res}.`);
}
largestNumber(5, -3, 16)