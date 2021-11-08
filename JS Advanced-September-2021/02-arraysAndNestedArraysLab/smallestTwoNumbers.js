function findTwoSmallestNumbers(list) {
    sortedList = list.sort((a,b) => a - b);
    console.log(sortedList.slice(0, 2).join(' '));
}


findTwoSmallestNumbers([30, 15, 50, 5]);