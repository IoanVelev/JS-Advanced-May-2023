function subtract() {
    let num1Element = Number(document.getElementById('firstNumber').value);
    let num2Element = Number(document.getElementById('secondNumber').value);
    let calculate = num1Element - num2Element;
    let res = document.getElementById('result');
    res.textContent = calculate
    console.log(res.textContent);
}