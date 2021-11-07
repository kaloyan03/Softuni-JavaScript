function convertToJSONTable(citiesData) {
    let townsInfo = [];
    for (let city of citiesData) {
        if (city == citiesData[0]) {
            continue;
        }
        city = city.slice(2, city.length - 2);
        let [name, latitude, longitude] = city.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        townsInfo.push({
            'Town': name,
            'Latitude': latitude,
            'Longitude': longitude,
        })
    }

    return JSON.stringify(townsInfo);
}

// console.log(convertToJSONTable(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// ));

// console.log(convertToJSONTable([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
//   ]
//   ));