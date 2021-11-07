function solve(firstString, secondString, thirdString) {
    function sum(elements) {
        result = 0
        for (let i = 0; i < elements.length; i++) {
            result += elements[i];
        }
        return result;
    }
    
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;
    let sumOfLengths = sum([firstStringLength, secondStringLength, thirdStringLength]);
    console.log(sumOfLengths);
    let averageLength = Math.floor(sumOfLengths / 3);
    console.log(averageLength);
}


solve('chocolate', 'ice cream', 'cake')