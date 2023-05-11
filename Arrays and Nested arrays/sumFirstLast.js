function sumFirstLast(arr){
let firstNum = Number(arr.shift());
let lastNum = Number(arr.pop());
let output = firstNum + lastNum;
return output;
}
console.log(sumFirstLast(['20', '30', '40']))
