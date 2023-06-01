function printDeckOfCards(cards) {
    let output = [];
    for (let currentCard of cards) {
        let face = currentCard.slice(0, -1);
        let suit = currentCard.slice(-1);
        
        try {
            let card = createCard(face, suit);
            output.push(card);
        } catch (error) {
            output = [`Invalid card:` + ' ' + currentCard];
        }
        
    }
    console.log(output.join(" "));
    function createCard(face, suit){
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suits = {
            S: '\u2660', 
            H: '\u2665', 
            D: '\u2666', 
            C: '\u2663',
        }
        if (!faces.includes(face) || !suits[suit]) {
            throw new Error('Error');
        }
        let card = {
            face,
            suit,
            toString() {
                return `${this.face}${suits[this.suit]}`;
            }
        }
        return card;
    }
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])
