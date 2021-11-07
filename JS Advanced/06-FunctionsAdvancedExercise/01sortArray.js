function sortArray(numbersArray, sortType) {
    if (sortType == 'asc') {
        return numbersArray.sort((a, b) => Number(a) - Number(b));
    } else if (sortType == 'desc') {
        return numbersArray.sort((a, b) => Number(b) -Number(a));
    }
}

// sortArray([14, 7, 17, 6, 8], 'asc');
// sortArray([14, 7, 17, 6, 8], 'desc');