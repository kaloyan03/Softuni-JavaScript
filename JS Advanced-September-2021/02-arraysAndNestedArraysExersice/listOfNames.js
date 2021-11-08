// function solve(arr) {
//     arr = arr.sort((a, b) => a.localeCompare(b))
//     arr.forEach((x, i) => console.log(`${i+1}.${x}`))
// }

function solve(array) {
    array.sort((a,b) => a.localeCompare(b));
    let counter = 1;
    for (element of array) {
        console.log(`${counter}.${element}`);
        counter ++;
    }
}


// solve(["John", "Bob", "Christina", "Ema"])