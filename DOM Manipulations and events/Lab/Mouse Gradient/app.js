function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    let result = document.getElementById('result');

    const onMouseOverHandler = (e) => {
        let maxWidth = e.target.clientWidth;
        let currentPosition = e.offsetX;
        let percentage = Math.trunc(currentPosition * 100 / maxWidth);
        result.textContent = `${percentage}%`;
    }
    const onMouseOutHandler = () => {
        result.textContent = '';
    }
    gradientBox.addEventListener('mousemove', onMouseOverHandler);
    gradientBox.addEventListener('mouseout', onMouseOutHandler);
}