function juiceFlavours(arr){
let obj = {};
let juicesStore = {};
for (let line of arr) {
    let [juice, quantity] = line.split(' => ');
    if (!obj[juice]) {
        obj[juice] = Number(quantity);
        if (obj[juice] >= 1000) {
            juicesStore[juice] = Math.floor(obj[juice] / 1000);
            obj[juice] -= juicesStore[juice] * 1000;
        }
    } else{
        obj[juice] += Number(quantity);
        if (obj[juice] >= 1000) {
            juicesStore[juice] = juicesStore[juice] ? juicesStore[juice] + Math.floor(obj[juice] / 1000) : Math.floor(obj[juice] / 1000)
            obj[juice] -= juicesStore[juice] * 1000;
        }
    }
}
for (let key in juicesStore) {
    console.log(`${key} => ${juicesStore[key]}`);
}
}
juiceFlavours(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])
console.log('____________________________________');
juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])

