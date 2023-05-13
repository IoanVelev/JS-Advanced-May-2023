function rotateArray(arr, rotations){
    for (let index = 0; index < rotations; index++) {
        let el = arr.pop();
        arr.unshift(el)
        
    }
    console.log(arr.join(" "));
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)