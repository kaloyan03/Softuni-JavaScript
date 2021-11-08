class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    } 

    set budget(value) {
        // keep in mind if there are incorrect tests, that there can be zero including
        if (value <= 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(product) {
        let productType = product[0];
        let productPrice = Number(product[1]);

        if (this._budget < productPrice) {
            throw new Error(`Not enough money to buy this product`);
        }

        this.products.push(productType);
        this._budget -= productPrice;

        return `You have successfully bought ${productType}!`;
    }

    recipes({ recipeName, productsList }) {
        for (const product of productsList) {
            if (!(this.products.includes(product))) {
                throw new Error('We do not have this product');
            }
            
        }

        this.dishes.push({recipeName, productsList})
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let isDishInDishesArray = false;
        let recipeName = dish;
        let dishToAdd = undefined;
        
        for (const currentDish of this.dishes) {
            let currentDishRecipeName = currentDish['recipeName'];
            if (recipeName === currentDishRecipeName) {
                isDishInDishesArray = true;
                dishToAdd = currentDish;
                break;
            }
        }

        if (isDishInDishesArray === false) {
            throw new Error('We do not have this dish');
        }

        let isGuestAlreadyInGuests = false;
        for (const key of Object.keys(this.guests)) {
            if (key === name) {
                isGuestAlreadyInGuests = true;
                break;
            }
        }

        if (isGuestAlreadyInGuests === true) {
            throw new Error(`This guest has already been invited`);
        }
        
        this.guests[name] = dishToAdd;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        const result = [];
        for (const [key, value] of Object.entries(this.guests)) {
            let message = `${key} will eat ${value['recipeName']}, which consists of ${value['productsList'].join(', ')}`.trim();
            result.push(message);
        }

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
