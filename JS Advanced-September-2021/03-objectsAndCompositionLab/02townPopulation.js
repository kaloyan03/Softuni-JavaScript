function townPopulation(arrayOfCities) {
    const towns = {};
    for (const element of arrayOfCities) {
        [city, population] = element.split(' <->');
        population = Number(population);
        
        if (!(city in towns)) {
            towns[city] = 0; 
        }

        towns[city] += population;
    }

    const cities = Object.keys(towns);
    for (const city of cities) {
        console.log(`${city} : ${towns[city]}`);
    }
}

console.log(townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
));