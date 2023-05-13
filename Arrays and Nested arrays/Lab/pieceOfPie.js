function pieceOfPie(arr, str1, str2){
let output = [];
let startingIndex = arr.indexOf(str1);
let endIndex = arr.indexOf(str2) + 1;
for (let index = startingIndex; index < endIndex; index++) {
    let currentEl = arr[index];
    output.push(currentEl)
}
return output;
}
console.log(pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'))