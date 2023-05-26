function validate() {
    let emailInput = document.getElementById('email');
    let regex = /(?<name>[a-z]+)@(?<domain>[a-z]+)\.(?<extension>[a-z]+)/gm;
    emailInput.addEventListener('change', () => {
        let match = regex.exec(emailInput.value);
        if (match === null) {
            emailInput.classList.add('error');
        } else{
            emailInput.classList.remove('error');
        }
    });
}