function getFibonator() {
    num1 = 0;
    num2 = 1;
    function fib() {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
        return num1;
    }

    return fib;
}

// 0 1 1 2 3 5 8 13 ...

// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13
