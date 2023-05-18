function heroicInventory(input){
    let output = []
for (let line of input) {
    let obj = {}
    let [name, level, items] = line.split(" / ");
    obj.name = name;
    obj.level = Number(level);
    if (items !== undefined) {
        obj.items = items.split(", ");
    } else{
        obj.items = [];
    }
    output.push(obj);
}
console.log(JSON.stringify(output));
}
