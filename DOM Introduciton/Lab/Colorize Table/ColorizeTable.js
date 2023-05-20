function colorize() {
    let rowElements = document.getElementsByTagName('tr');
    let rows = Array.from(rowElements);
    rows.forEach((el,i) => {
        if (i % 2 == 1) {
            el.style.backgroundColor = 'teal'
        }
    });
}