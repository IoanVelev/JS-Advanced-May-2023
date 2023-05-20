function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let sum = Number(num1.value) + Number(num2.value)
    let res = document.getElementById('sum');
    res.value = sum;
}
