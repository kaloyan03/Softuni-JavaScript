function printNumbersAtEvenPosition(list) {
    let numbersAtEvenPosition = [];
    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            numbersAtEvenPosition.push(list[i]);
        }
    }
    console.log(numbersAtEvenPosition.join(' '));

}


// printNumbersAtEvenPosition(['20', '30', '40', '50', '60'])