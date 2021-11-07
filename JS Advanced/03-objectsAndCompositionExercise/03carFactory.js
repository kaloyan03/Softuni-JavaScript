function carFactory(carRequirements) {
    const engines = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 },
    };

    const carModel = carRequirements['model'];
    const horsePowerRequirement = carRequirements['power'];
    const colorRequirement = carRequirements['color'];
    const carriageRequirement = carRequirements['carriage'];
    const wheelSizeRequirement = carRequirements['wheelsize'];
    let result = {};

    const carEngineName = getRequiredEngine(horsePowerRequirement);

    let carriage = {type: carriageRequirement, color: colorRequirement};

    let wheelSize = undefined;
    if (wheelSizeRequirement % 2 == 0) {
        wheelSize = wheelSizeRequirement - 1;
    } else {
        wheelSize = wheelSizeRequirement;
    }


    result['model'] = carModel;
    result['engine'] = engines[carEngineName];
    result['carriage'] = carriage;
    result['wheels'] = [wheelSize, wheelSize, wheelSize, wheelSize]


    function getRequiredEngine(requiredPower) {
        if (requiredPower <= 90) {
            return 'Small engine';
        } else if (requiredPower <= 120) {
            return 'Normal engine';
        } else {
            return 'Monster engine';
        }
    }

    return result;
}

// carFactory({ model: 'VW Golf II',
// power: 90,
// color: 'blue',
// carriage: 'hatchback',
// wheelsize: 14 }
// );

// console.log(carFactory({
//     model: 'Opel Vectra',
//     power: 160,
//     color: 'grey',
//     carriage: 'coupe',
//     wheelsize: 17
// }
// ));