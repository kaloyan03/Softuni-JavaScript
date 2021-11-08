function argumentInfo(...args) {
    argumentsCount = {};

    args.forEach(x => {
        if (typeof x === 'object') {
            console.log(`object:`);
        } else {
            console.log(`${typeof x}: ${x}`);
        }

        if (!(typeof x in argumentsCount)) {
            argumentsCount[typeof x] = 0;
        }
        argumentsCount[typeof x] += 1;
    });

    for (key in argumentsCount) {
        console.log(`${key} = ${argumentsCount[key]}`);
    }
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); });

// argumentInfo({ name: 'bob'}, 3.333, 9.999)