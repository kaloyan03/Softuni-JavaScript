function printCalorieObject(productsInfoArray) {
    const productsObject = {};
    for (let i = 0; i < productsInfoArray.length; i+=2) {
        product = productsInfoArray[i];
        productCalories = productsInfoArray[i+1];

        productsObject[product] = Number(productCalories);

    }

    console.log(productsObject);
}

// printCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])