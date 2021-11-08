function autoEngeneeringCompany(carsArray) {
    const carStorage = new Map();
    carsArray.forEach(el => {
        let [brand, model, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);

        if (!(carStorage.has(brand))) {
            carStorage.set(brand, new Map());
        }

        let carModels = carStorage.get(brand);

        if (!(carModels.has(model))) {
            carModels.set(model, {'carsProduced': 0});
        }
        let previousNumber = carModels.get(model)['carsProduced'];
        carModels.set(model, {'carsProduced' : previousNumber + producedCars});
    })

    for (const brandKey of carStorage.keys()) {
        let currentModels = carStorage.get(brandKey);
        console.log(brandKey);
        for (const modelKey of currentModels.keys()) {
            let currentCarsProduced = currentModels.get(modelKey);
            console.log(`###${modelKey} -> ${currentCarsProduced['carsProduced']}`);
        }
    }
}

autoEngeneeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)