function solution() {
    supply = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0,
    };
    
    recipes = {
        'apple': {'carbohydrate' : 1, 'flavour': 2},
        'lemonade': {'carbohydrate': 10, 'flavour': 20},
        'burger': {'carbohydrate': 5, 'fat': 7, 'flavour': 3},
        'eggs': {'protein': 5, 'fat': 1, 'flavour': 1},
        'turkey':{'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10},
    }

    function manager(input) {
        commandData = input.split(' ');
        command = commandData[0];

        if (command == 'restock') {
            microelement = commandData[1];
            quantity = Number(commandData[2]);
            supply[microelement] += quantity;
            return 'Success';

        } else if (command == 'prepare') {
            recipe = commandData[1];
            quantity = Number(commandData[2]);
            for (key in recipes[recipe]) {
                supplyQuantity = recipes[recipe][key] * quantity;
                if (supply[key] < supplyQuantity) {
                    return `Error: not enough ${key} in stock`;
                }
            }
            for (key in recipes[recipe]) {
                supplyQuantity = recipes[recipe][key] * quantity;
                supply[key] -= supplyQuantity;
            }
            return 'Success';

        } else if (command == 'report') {
            return `protein=${supply['protein']} carbohydrate=${supply['carbohydrate']} fat=${supply['fat']} flavour=${supply['flavour']}`;

        }

    }

    return manager;
}

// let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log (manager ("restock carbohydrate 10"));
// console.log (manager ("restock flavour 10"));
// console.log (manager ("prepare apple 1"));
// console.log (manager ("restock fat 10"));
// console.log (manager ("prepare burger 1"));
// console.log (manager ("report"));

// let manager = solution();
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));



