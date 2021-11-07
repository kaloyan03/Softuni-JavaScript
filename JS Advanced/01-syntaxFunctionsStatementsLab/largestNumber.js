function findLargestNumber(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    biggestNumber = numbers[0];
    for (num of numbers) {
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }
    console.log(`The largest number is ${biggestNumber}.`);
}


// findLargestNumber(5, -3, 16)