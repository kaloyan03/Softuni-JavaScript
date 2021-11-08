function createCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
    const suitValues = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2660',
    };

    if (validFaces.includes(face) === false) {
        throw new Error('In')
    } else if (Object.keys(suitValues).includes(suit) === false) {
        console.error('Error');
    };
    

    return {
        face,
        suit,
        toString() {return `${face}${suitValues[suit]}`}
    };
}

// const cards = createCard('A', 'S')
// console.log(cards.toString());
