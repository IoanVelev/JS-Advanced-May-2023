function subtract() {
    let num1Element = document.getElementById('firstNumber').value;
    let num2Element = document.getElementById('secondNumber').value;
    let calculate = num1Element - num2Element;
    let res = document.getElementById('result');
    res.textContent = calculate
    console.log(res.textContent);
}