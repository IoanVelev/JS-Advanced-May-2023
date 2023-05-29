function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {
    let coordinates = JSON.parse(input);
    let arr = [];
    for (let currentCordinates of coordinates) {
        arr.push({
            area: area.call(currentCordinates),
            volume: vol.call(currentCordinates)
        });
    }
    return arr;
}
