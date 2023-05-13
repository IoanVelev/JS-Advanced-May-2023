function wordsUppercase(input){
let regex = /\w+/g;
let extractedWords = input.match(regex).map(x => x.toUpperCase());
let res = extractedWords.join(', ')
console.log(res);
}
wordsUppercase('Hi, how are you?')