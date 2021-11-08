function subSum(arrayOfNumbers, startIndex, endIndex) {
    if (Array.isArray(arrayOfNumbers) == false) {
        return NaN;
    } 
    
    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arrayOfNumbers.length) {
        endIndex = arrayOfNumbers.length;
    }

    return arrayOfNumbers
    .slice(startIndex, endIndex + 1)
    .reduce((acc, curr) => acc + Number(curr) ,0)
}

console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2))
console.log(subSum('text', 0, 2))
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))