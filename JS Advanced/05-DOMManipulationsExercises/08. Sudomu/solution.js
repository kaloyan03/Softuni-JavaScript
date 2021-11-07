function solve() {
    // select DOM elements
    allTdElements = document.querySelectorAll('table tbody td');
    allButtonElements = document.querySelectorAll('table tfoot button');
    quickCheckButtonElement = allButtonElements[0];
    clearButtonElement = allButtonElements[1];
    

    //add event listener to quick check button

    quickCheckButtonElement.addEventListener('click', checkGameCondition);
    
    function checkGameCondition() {
        firstNumber = Number(allTdElements[0].children[0].value);
        secondNumber = Number(allTdElements[1].children[0].value);
        thirdNumber = Number(allTdElements[2].children[0].value);
        
        fourthNumber = Number(allTdElements[3].children[0].value);
        fifthNumber = Number(allTdElements[4].children[0].value);
        sixthNumber = Number(allTdElements[5].children[0].value);
        
        seventhNumber = Number(allTdElements[6].children[0].value);
        eightNumber = Number(allTdElements[7].children[0].value);
        ninthNumber = Number(allTdElements[8].children[0].value);

        if (firstNumber !== secondNumber !== thirdNumber && firstNumber !== fourthNumber !== seventhNumber) {
            console.log('YES');
        }
    
    }



}