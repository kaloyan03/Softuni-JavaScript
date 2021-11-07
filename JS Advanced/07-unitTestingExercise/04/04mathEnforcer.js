let mathEnforcer = {
    addFive : function (number) {
        if (typeof number !== 'number') {
            return undefined;
        };
        return number + 5;
        },
    subtractTen : function (number) {
        if (typeof number !== 'number') {
            return undefined;
        };
        return number - 10;
        },

    sum : function (number1, number2) {
        if (typeof number1 !== 'number' || typeof number2 !== 'number') {
            return undefined;
        };

        return number1 + number2;
    }
};
const addFive = mathEnforcer.addFive;
const subtractTen = mathEnforcer.subtractTen;
const sum = mathEnforcer.sum;

console.log(sum(10,15));
console.log(subtractTen(15));
console.log(addFive(5));

module.exports = mathEnforcer;