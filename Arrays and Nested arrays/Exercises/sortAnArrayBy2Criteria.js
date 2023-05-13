function sortAnArrayBy2Criteria(input){
let sortedArray = input.sort((a, b) => a.length - b.length|| a.localeCompare(b));
sortedArray.map(x => console.log(x))
}
sortAnArrayBy2Criteria(['alpha', 
'beta', 'gamma'])