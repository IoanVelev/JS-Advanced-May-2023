function biggestElement(arr) {
    let biggestEl = [];
    for (let index = 0; index < arr.length; index++) {
        let currentBest = Math.max(...arr[index]);
        biggestEl.push(currentBest)
    }
    return Math.max(...biggestEl);
}
console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]))