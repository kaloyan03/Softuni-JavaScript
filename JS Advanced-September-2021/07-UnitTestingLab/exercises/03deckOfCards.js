function printDeckOfCards(cards) {
    function createCard (){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
        const suitValues = {
            'S' : '\u2660',
            'H' : '\u2665',
            'D' : '\u2666',
            'C' : '\u2663',
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
    
     {
    cardsDeck = [];
    for (el of cards) {
        if (el.length == 2) {
            face = el.slice(0,1);
            suit = el.slice(1,2 + 1);                
        } else if (el.length == 3) {
            face = el.slice(0,2);
            suit = el.slice(2,3 + 1);    
        }
            
        try {
            cardsDeck.push(createCard(face, suit).toString());
        } catch (e){
            console.log(`Invalid card: ${el}`);
            return;
            
        }

    }
    console.log(cardsDeck.join(' '));
    }
}
  

// myCard = printDeckOfCards(['AS', '10D', 'KH', '2C']);
// myCard = printDeckOfCards(['5S', '3D', 'QD', '1C'])