function sumNumbersFromNToM(n, m) {
    result = 0;
    
    let number1 = Number(n);
    let number2 = Number(m);

    for (let i = number1; i <= number2; i++) {
        result += i;
    }
    console.log(result);
}

// sumNumbersFromNToM('1', '5');