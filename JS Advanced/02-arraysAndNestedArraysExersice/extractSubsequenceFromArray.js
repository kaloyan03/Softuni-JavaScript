function solve(array) {
    result = [];
    let biggestNumber = array[0]
    for (number of array) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            result.push(number);
    }
    }
    return result;

}

console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));