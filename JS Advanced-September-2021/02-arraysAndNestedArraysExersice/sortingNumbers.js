function sortNumbers(arrayOfNumbers) {
    result = [];
    arrayOfNumbers.sort((a,b) => a - b);
    
    while (arrayOfNumbers.length > 0) { 
        result.push(arrayOfNumbers.shift());

        if (arrayOfNumbers.lenght !== 0) {
            result.push(arrayOfNumbers.pop());
        }
    }

    return result;
}

// sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])