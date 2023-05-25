function addItem() {
    let addedInput = document.getElementById('newItemText');
    let listedElements = document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = addedInput.value;
    addedInput.value = '';
    let deletedElement = document.createElement('a');
    deletedElement.href = '#';
    deletedElement.textContent = '[Delete]';
    deletedElement.addEventListener('click', (el) => {
        el.currentTarget.parentElement.remove();
    })
    liElement.appendChild(deletedElement);
    listedElements.appendChild(liElement);
}