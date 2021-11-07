// function registerHeroes(inputArray) {
//     result = [];
//     for (element of inputArray) {
//         heroesData = element.split(' / ');
//         heroName = heroesData[0];
//         heroLevel = Number(heroesData[1]);
//         heroItemsArray = heroesData[2] ? heroesData[2].split(', ') : [];
//         result.push({"name" : heroName, "level" : heroLevel, "items": heroItemsArray});
//     }
// console.log(JSON.stringify(result));
// }


function registerHeroes(heroesDataArray) {
    const result = [];
    for (const heroData of heroesDataArray) {
        let [heroName, heroLevel, items] = heroData.split(' / ');
        let itemsArray = items ? items.split(', ') : [];
        result.push({'name' : heroName, 'level': Number(heroLevel), 'items' :  itemsArray});
    }
    
    return JSON.stringify(result);
}

// registerHeroes(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']
// );