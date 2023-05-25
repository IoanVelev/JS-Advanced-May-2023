function deleteByEmail() {
    let inputEmailElement = document.querySelector('input[name="email"]').value;
    let emailElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let output = document.getElementById('result');
    let arrEmailElements = Array.from(emailElements);
    let targetElement = arrEmailElements.find(el => el.textContent === inputEmailElement);
    if (targetElement === undefined) {
        output.textContent = 'Not found.';
        return;
    } else{
        targetElement.parentElement.remove();
        output.textContent = 'Deleted';
    }
}