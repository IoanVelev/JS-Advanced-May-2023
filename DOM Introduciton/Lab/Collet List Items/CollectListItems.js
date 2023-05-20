function extractText() {
    let ulElements = document.getElementById('items');
    let result = document.getElementById('result');
    result.textContent = ulElements.textContent
    console.log(result.textContent);
}