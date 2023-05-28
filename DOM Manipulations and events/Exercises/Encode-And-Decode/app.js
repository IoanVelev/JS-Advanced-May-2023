function encodeAndDecodeMessages() {
    let inputText = document.getElementById('main').querySelectorAll('div')[0].querySelector('textarea');
    let decodedText = document.getElementById('main').querySelectorAll('div')[1].querySelector('textarea');
    let encodeButton = document.querySelectorAll('button')[0].addEventListener('click', () => {
        let textArr = inputText.value.split("");
        for (let index = 0; index < textArr.length; index++) {
            let ch = textArr[index];
            ch = ch.charCodeAt(0) + 1;
            console.log(ch);
            textArr[index] = String.fromCharCode(ch);
        }
        let res = textArr.join("");
        decodedText.textContent = res;
        inputText.value = '';
    })
    let decodeButton = document.querySelectorAll('button')[1].addEventListener('click', () => {
        let output = decodedText.textContent.split("");
        for (let j = 0; j < output.length; j++) {
            let ch = output[j];
            ch = ch.charCodeAt(0) - 1;
            output[j] = String.fromCharCode(ch);
        }
        decodedText.textContent = output.join("");
    })
}