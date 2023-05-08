function sumOfNumbers(n, m){
let num1 = Number(n);
let num2 = Number(m);
let finalRes = 0;
for (let index = num1; index <= num2; index++) {
    finalRes += index;
}
return finalRes;
}
console.log(sumOfNumbers('-8', '20'))