function sortingNumbers(input) {
    let result = [];
    while (input.length > 0) {
        let currentSmallest = Math.min(...input);
        let currentBiggest = Math.max(...input);
        if (currentSmallest === currentBiggest) {
            input.splice(input.indexOf(currentSmallest), 1);
            result.push(currentSmallest)
        } else{
            input.splice(input.indexOf(currentSmallest), 1);
            input.splice(input.indexOf(currentBiggest), 1);
            result.push(currentSmallest, currentBiggest)
        }
        
    }
    return result;
}
console.log(sortingNumbers([1,2,3,0]));