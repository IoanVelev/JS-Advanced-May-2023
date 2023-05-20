function editElement(element, match, replacer) {
    let patern = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(patern, replacer);
}