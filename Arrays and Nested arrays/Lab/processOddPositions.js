function processOddPositions(inputArr){
    let output = [];
for (let index = 0; index < inputArr.length; index++) {
    let el = inputArr[index];
    if (index % 2 == 1) {
        el *= 2
        output.push(el)
    }
}
return output.reverse().join(" ");
}
console.log(processOddPositions([10, 15, 20, 25]))