function negativePositiveNumbers(list) {
    modifiedList = [];
    for (num of list) {
        if (num >= 0) {
            modifiedList.push(num);
        } else {
            modifiedList.unshift(num);
        }
    }
    for (num of modifiedList) {
        console.log(num);
    }
}

negativePositiveNumbers([7, -2, 8, 9])