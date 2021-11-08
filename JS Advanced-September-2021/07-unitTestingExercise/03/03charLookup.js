function lookupChar(string, index) {
    if (typeof string !== 'string' || Number.isInteger(index) === false) {
        return undefined;
    };

    if (index >= string.length || index < 0) {
        return 'Incorrect index';
    };

    return string[index];
};

console.log(lookupChar('test', 4));

module.exports = lookupChar;