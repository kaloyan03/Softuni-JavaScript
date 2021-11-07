function printEveryNElementFromArray(list, step) {
    result = [];
    for (let i = 0; i < list.length; i+=step) {
        result.push(list[i]);
    }

    return result;
}

// printEveryNElementFromArray(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// );

// printEveryNElementFromArray(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// )