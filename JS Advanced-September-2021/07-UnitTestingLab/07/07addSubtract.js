function createCalculator() {
    let sum = 0;
    return {
        add: (num) => {sum += Number(num); },
        subtract: (num) => {sum -= Number(num); },
        get: () => {return sum; },
    }
};



module.exports = createCalculator;