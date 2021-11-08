function juiceFlavours(juicesArray) {
    const juiceStorage = new Map();
    const juiceBottles = new Map();
    juicesArray.forEach(el => {
        let [name, quantity] = el.split(' => ');
        quantity = Number(quantity);
        if (!(juiceStorage.has(name))) {
            juiceStorage.set(name, 0);
        }

        if (!(juiceBottles.has(name))) {
            juiceBottles.set(name, 0);
        }

        let previousQuantity = juiceStorage.get(name);
        juiceStorage.set(name, previousQuantity + quantity);

        let previousBottles = juiceBottles.get(name);
        juiceBottles.set(name, (quantity + previousQuantity / 1000) + previousBottles);
    })

    console.log(juiceBottles);
}

// juiceFlavours(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']
// )

juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)