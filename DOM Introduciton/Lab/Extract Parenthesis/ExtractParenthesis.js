function extract(content) {
let contentElements = document.getElementById(content);
let regex = /\(([^)]+)\)/gm;
let matches = contentElements.textContent.matchAll(regex);
let result = [];
for (let match of matches) {
   result.push(match[1]);
}
return result.join("; "); 
}