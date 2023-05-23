function solve() {
  let inputTextElement = document.getElementById('input').value;
  let textArr = inputTextElement.split(".").filter(s => s !== '');
  let resultDiv = document.getElementById('output');

  while(textArr.length > 0){
    let currentText = textArr.splice(0,3).join(". ") + '.';
    let p = document.createElement('p');
    p.textContent = currentText;
    resultDiv.appendChild(p);
  }
}