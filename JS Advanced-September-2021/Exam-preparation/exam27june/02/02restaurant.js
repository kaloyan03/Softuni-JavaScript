class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (const product of products) {
            let [productName, quantity, totalPrice] = product.split(' ');
            quantity = Number(quantity);
            totalPrice = Number(totalPrice);
            let isProductInProducts = false;
            if (this.budgetMoney >= totalPrice) {
                for (const key in this.stockProducts) {
                    if (key === productName) {
                        isProductInProducts = true;
                        break;
                    }
                }

                if (isProductInProducts === false) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += quantity;
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }

    getMealsCount() {
        return Object.keys(this.menu).length;
    }

    addToMenu(meal, neededProducts, price) {
        let isMealInMenu = false;
        for (const key of Object.keys(this.menu)) {
            if (key === meal) {
                isMealInMenu = true;
            }
        }

        if (isMealInMenu) {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        let products = {};

        neededProducts.forEach((el) => {
            let [name, quantity] = el.split(' ');
            quantity = Number(quantity);
            if (!(name in products)) {
                products[name] = 0;
            }
            products[name] += quantity;
        })

        this.menu[meal] = { products, price };
        if (this.getMealsCount() == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${this.getMealsCount()} meals in the menu, other ideas?`;
        }

    }

    showTheMenu() {
        if (this.getMealsCount() == 0) {
            return 'Our menu is not ready yet, please come later...';
        }
        const result = [];

        for (const [key, value] of Object.entries(this.menu)) {
            result.push(`${key} - $ ${value['price']}`)
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        let mealName = undefined;
        let mealInfo = undefined;
        for (const [key, value] of Object.entries(this.menu)) {
            if (key === meal) {
                mealName = key;
                mealInfo = value;
            }
        }

        if (!(mealName)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let productTaken = {};

        let everythingIsOk = true;
        for (const [productName, productQuantity] of Object.entries(mealInfo['products'])) {
            let isCurrentProductInProducts = false;
            for (const [key, value] of Object.entries(this.stockProducts)) {
                if (key === productName && value >= productQuantity) {
                    isCurrentProductInProducts = true;
                    productTaken[key] = productQuantity;
                    this.stockProducts[key] -= productQuantity;
                    break;
                } 
            }

            if (isCurrentProductInProducts === false) {
                for (const [key, value] of Object.entries(productTaken)) {
                    this.stockProducts[key] += value;
                }
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        this.budgetMoney += mealInfo['price'];
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealInfo['price']}.`;


    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);


// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 5 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
