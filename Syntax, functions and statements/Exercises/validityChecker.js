function validityChecker(x1,y1,x2,y2){
let comparison1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
let comparison2 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
let comparison3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
if (Number.isInteger(comparison1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
} else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}
if (Number.isInteger(comparison2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
} else{
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
}
if (Number.isInteger(comparison3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
} else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); 
}
}
validityChecker(2, 1, 1, 1)