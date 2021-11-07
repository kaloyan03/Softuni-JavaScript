function solve(arrayOfStrings) {
    arrayOfStrings
        .sort((a, b) =>
            a.length - b.length === 0
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )


    for (element of arrayOfStrings) {
        console.log(element);
    }

}

// solve(['alpha', 
// 'beta', 
// 'gamma']
// )