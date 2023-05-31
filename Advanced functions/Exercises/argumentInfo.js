function argumentInfo(){
    let obj = {};
for (let el of arguments) {
    let typeEl = typeof el;
    console.log(`${typeEl}: ${el}`);
    !obj[typeEl]? obj[typeEl] = 1 : obj[typeEl]++;
}
let output = Object.entries(obj).sort((a,b) => b[1] - a[1]).forEach(el => {
    let key = el[0];
    let value = el[1];
    console.log(`${key} = ${value}`);
});
}