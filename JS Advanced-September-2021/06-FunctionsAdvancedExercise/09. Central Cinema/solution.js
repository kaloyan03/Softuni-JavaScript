function solve() {
    // get elements
    onScreenButtonElement = document.querySelector('#container button');
    
    listMoviesElement = document.querySelector('#movies ul');

    clearButtonElement = document.querySelector('#archive button');

    archiveSectionUlElement = document.querySelector('#archive ul');

    // add event listener to on screen button
    onScreenButtonElement.addEventListener('click', checkRequirements);

    
    function checkRequirements(e) {
        e.preventDefault();

        inputElements = document.querySelectorAll('#container input');
    
        nameElement = inputElements[0];
        hallElement = inputElements[1];
        priceElement = inputElements[2];
        
        filmName = nameElement.value;
        hall = hallElement.value;
        price = priceElement.value;

        if (!(filmName == '' && hall == '') && (!(isNaN(price))) || price == '') {
            price = Number(priceElement.value);

            nameElement.value = '';
            hallElement.value = '';
            priceElement.value = '';


            // create new li element with values for the film
            liElement = createElement('li');
            
            spanElement = createElement('span');
            spanElement.textContent = filmName;
            
            strongElement = createElement('strong');
            strongElement.textContent = `Hall: ${hall}`
            
            divElement = createElement('div');
            
            strongElement2 = createElement('strong');
            strongElement2.textContent = price.toFixed(2);
            
            inputElement = createElement('input');
            inputElement.setAttribute('placeholder', 'Tickets Sold');
            
            // add event listener to each button
            buttonElement = createElement('button');
            buttonElement.textContent = 'Archive';
            buttonElement.addEventListener('click', addItemToArchiveSection)

            divElement.appendChild(strongElement2);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            liElement.appendChild(divElement);

            listMoviesElement.appendChild(liElement);
            

        }
    }

    // func for the event listener of archive button
    function addItemToArchiveSection(e) {
        e.preventDefault();
        currentLiElement = e.target.parentElement.parentElement;
        let ticketsCount = inputElement.value;
        if (!isNaN(ticketsCount)) {
            ticketsCount = Number(ticketsCount);
            liArchiveElement = createElement('li');
        
            spanArchiveElement = createElement('span');
            spanArchiveElement.textContent = filmName;

            strongArchiveElement = createElement('strong');
            strongArchiveElement.textContent = `Total amount: ${(ticketsCount * price).toFixed(2)}`;

            buttonArchiveElement = createElement('button');
            buttonArchiveElement.textContent = 'Delete';
            // add event listener to delete button
            buttonArchiveElement.addEventListener('click', function () {
                archiveSectionUlElement.removeChild(liArchiveElement);
            })

            liArchiveElement.appendChild(spanArchiveElement);
            liArchiveElement.appendChild(strongArchiveElement);
            liArchiveElement.appendChild(buttonArchiveElement);
            
            listMoviesElement.removeChild(currentLiElement);
            archiveSectionUlElement.appendChild(currentLiElement);


        }
    }

    function createElement(elementTag) {
        return document.createElement(elementTag);
    }

    // add event listener to clear button to delete all li's in archive section
    clearButtonElement.addEventListener('click', function(e) {
        e.preventDefault();
        archiveLisElements = Array.from(document.querySelectorAll('#archive ul li'));
        archiveLisElements.forEach(e => e.remove());

        });


}



