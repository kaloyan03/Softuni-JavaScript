function createCatalogueAlphabetically(products) {
    let catalogue = {};
    
    for (const productInfo of products) {
        let [name, price] = productInfo.split(' : ');
        price = Number(price);
        let firstLetter = name[0];
        if (!(catalogue[firstLetter])) {
            catalogue[firstLetter] = [];
        }

        catalogue[firstLetter].push({name, price});
    }
    
    const sorted = Object.keys(catalogue)
    .sort((a,b) => a.localeCompare(b))
    .reduce((obj, value) => {
        let sortedValues = catalogue[value].sort((a,b) => a['name'].localeCompare(b['name']));
        obj[value] = sortedValues;
        return obj;
    },
    {})
    
    for (const [key, value] of Object.entries(sorted)) {
        console.log(key);
        for (const item of value) {
            console.log(`  ${item['name']}: ${item['price']}`);
        }
    }

}


console.log(createCatalogueAlphabetically(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));

console.log('---------');


console.log(createCatalogueAlphabetically(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
));