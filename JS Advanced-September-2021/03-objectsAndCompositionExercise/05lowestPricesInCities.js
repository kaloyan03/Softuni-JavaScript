function getProductsLowerPrices(townsArray) {
    let catalogue = {};
    
    for (const element of townsArray) {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);
        
        if (!(productName in catalogue)) {
            catalogue[productName] = {};
        }

        catalogue[productName][townName] = productPrice;
    }

    for (const product in catalogue) {
        const sorted = Object
        .entries(catalogue[product])
        .sort((a,b) => a[1] - b[1])
        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

    
}
getProductsLowerPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)


// getProductsLowerPrices(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000'
//     ])