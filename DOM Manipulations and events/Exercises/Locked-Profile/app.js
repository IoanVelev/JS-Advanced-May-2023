function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(button => button.addEventListener('click', onClick));

    function onClick(event) {
        let parentElement = event.target.parentElement;
        let isUnlocked = parentElement.querySelector('input[value="unlock"]').checked;
        if (isUnlocked) {
            let hiddenInfo = parentElement.querySelector('div');

            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it';
                hiddenInfo.style.display = 'block';
            } else {
                event.target.textContent = 'Show more';
                hiddenInfo.style.display = 'none';
            }
        }
    }
}