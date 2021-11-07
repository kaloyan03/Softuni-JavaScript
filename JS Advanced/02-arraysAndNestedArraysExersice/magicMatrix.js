function isMagicMatrix(matrix) {
    isMagic = true;
    for (let row = 0; row < matrix.length; row++) {
        let currRowSum = matrix[row].reduce((acc, curr) => acc + curr);
        let currColSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            currColSum += matrix[col][row];
            
        }
        if (currColSum !== currRowSum) {
            isMagic = false;
            break;
    } 
}
console.log(isMagic);
}

isMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )

console.log('-------------');

isMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )