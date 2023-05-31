function subSum(list, start, end){
if (!Array.isArray(list)) {
    return NaN;
}
let startIndex = Math.max(start, 0);
let endIndex = Math.min(end, list.length - 1);

let array = list.slice(startIndex, endIndex + 1);
let sum = array.reduce((a,x) => a + Number(x),0)
return sum;
}