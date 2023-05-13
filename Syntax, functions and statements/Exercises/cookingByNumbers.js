function cookingByNumbers(num, op1, op2, op3, op4, op5){
num = Number(num);
let arrOperations = [op1,op2,op3,op4,op5];
let chop = function(){
    return num / 2;
} 
let dice = function(){
    return Math.sqrt(num);
}
let spice = function(){
    return num + 1;
}
let bake = function(){
    return num * 3;
}
let fillet = function(){
    return num * 0.80;
}
for (let operation of arrOperations) {
    switch (operation) {
        case 'chop':
            num = chop(num);
            console.log(num);
            break;
            case 'dice':
            num = dice(num);
            console.log(num);
            break;
            case 'spice':
            num = spice(num);
            console.log(num);
            break;
            case 'bake':
            num = bake(num);
            console.log(num);
            break;
            case 'fillet':
            num = fillet(num);
            console.log(num);
            break;
    }
}
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')