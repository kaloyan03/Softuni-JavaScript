function solution() {
    let addGiftButtonElement = document.querySelector('.container .card div button');
    let gifts = {};
    addGiftButtonElement.addEventListener('click', addGiftHandler)

    function addGiftHandler() {
        let giftNameElement = document.querySelector('.card div input');
        
        let giftNameValue = giftNameElement.value;
        giftNameElement.value = '';
        gifts[giftNameValue] = giftNameElement; 
        gifts = sortGiftsAlphabetically(gifts);
        displayGiftsToGiftsList(gifts);


    }

    function displayGiftsToGiftsList(giftsObject) {
        let allUlElements = getAllUlsElements();
        let giftsListElement = allUlElements[0];

        removeElementChildren(giftsListElement);
        

        for (const [key, value] of Object.entries(giftsObject)) {
            let giftNameListItemElement = document.createElement('li');
            giftNameListItemElement.textContent = key;
            giftNameListItemElement.setAttribute('class', 'gift');
            
            let sendButtonElement = document.createElement('button');
            sendButtonElement.setAttribute('id', 'sendButton');
            sendButtonElement.textContent = 'Send';
            
            sendButtonElement.addEventListener('click', sendButtonHandler);

            let discardButtonElement = document.createElement('button');
            discardButtonElement.setAttribute('id', 'discardButton');
            discardButtonElement.textContent = 'Discard';

            discardButtonElement.addEventListener('click', discardButtonHandler);

            giftNameListItemElement.appendChild(sendButtonElement);
            giftNameListItemElement.appendChild(discardButtonElement);

            giftsListElement.appendChild(giftNameListItemElement);
        }
    }

    function sendButtonHandler(e) {
        let allUlElements = getAllUlsElements();
        let sentGiftsSectionElement = allUlElements[1];
         
        // keep in mind that there can be incorrect answers !!!
        let giftLiElement = e.target.parentElement;
        let giftName = giftLiElement.textContent.replace('SendDiscard', '');
        removeElementChildren(giftLiElement);
        giftLiElement.textContent = giftName;

        delete gifts[giftName];


        sentGiftsSectionElement.appendChild(giftLiElement);


    }

    function removeElementChildren(element) {
        while (element.firstChild) {
            element.firstChild.remove();
        }
    }


    function discardButtonHandler(e) {
        let allUlElements = getAllUlsElements();
        let discardedGiftsSectionElement = allUlElements[2];
         
        // keep in mind that there can be incorrect answers !!!
        let giftLiElement = e.target.parentElement;
        let giftName = giftLiElement.textContent.replace('SendDiscard', '');
        removeElementChildren(giftLiElement);
        giftLiElement.textContent = giftName;

        delete gifts[giftName];


        sentGiftsSectionElement.appendChild(giftLiElement);
    }


    function getAllUlsElements() {
        return Array.from(document.querySelectorAll('.card ul'));
    }

    function sortGiftsAlphabetically(giftsObject) {
        const ordered = Object.keys(giftsObject).sort((a,b) => a.localeCompare(b)).reduce(
            (obj, key) => { 
            obj[key] = giftsObject[key]; 
            return obj;
            }, 
            {}
        );
        return ordered;        
    }

}