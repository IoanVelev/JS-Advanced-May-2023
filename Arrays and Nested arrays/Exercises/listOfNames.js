function listOfNames(arr){
let sortedNames = arr.sort((a, b) => a.localeCompare(b));
let index = 1;
for (let currentName of sortedNames) {
    console.log(`${index}.${currentName}`);
    index++
}
}
listOfNames(["John", 
"Bob", 
"Christina", 
"Ema"]
)