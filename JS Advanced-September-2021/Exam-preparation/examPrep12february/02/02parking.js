class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    isFreeParkingSlot(capacity, vehiclesParked) {
        if (vehiclesParked < capacity) {
            return true;
        }
        return false;
    }

    addCar(carModel, carNumber) {
        if (!(this.isFreeParkingSlot(this.capacity, this.vehicles.length))) {
            throw new Error('Not enough parking space.');
        }

        let car = {carModel, carNumber, payed: false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let currentCar = this.getCar(this.vehicles, carNumber);

        if (currentCar === undefined) {
            throw new Error(`The car, you're looking for, is not found.`)
        }

        if (currentCar['payed'] === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }        
        this.vehicles = this.vehicles.filter((car) => car['carNumber'] !== carNumber);
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) { 
        let currentCar = this.getCar(this.vehicles, carNumber);

        if (currentCar === undefined) {
            throw Error(`${carNumber} is not in the parking lot.`)
        }

        if (currentCar['payed'] === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        currentCar['payed'] = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getEmptySlots(vehicles, capacity) {
        return capacity - vehicles;
    }
 
    getStatistics(carNumber) {
        let result = '';
        if (carNumber === undefined) {
            let vehiclesResult = [];
            const emptySlots = this.getEmptySlots(this.vehicles.length, this.capacity);
            result += `The Parking Lot has ${emptySlots} empty spots left.\n`;
            let sortVehicles = this.vehicles.sort((a,b) => a['carModel'].localeCompare(b['carModel']));
            for (const vehicle of sortVehicles) {
                let payedMessage = vehicle['payed'] === false ? `Not payed` : 'Has payed';
                vehiclesResult.push(`${vehicle['carModel']} == ${vehicle['carNumber']} - ${payedMessage}`);
            }
            result += vehiclesResult.join('\n');
        } else {
            let car = this.getCar(this.vehicles, carNumber);
            let payedMessage = car['payed'] === false ? `Not payed` : 'Has payed';
            return `${car['carModel']} == ${car['carNumber']} - ${payedMessage}`;
        }

        return result;
    } 

    getCar(vehicles, carNumber) {
        let currentCar = undefined;
        for (const car of vehicles) {
            if (car['carNumber'] === carNumber) {
                currentCar = car;
                break;
            }
        }
        return currentCar;        
    }
}

const parking = new Parking(4);
// console.log(parking.addCar('car', '1234'));
// console.log(parking.addCar('asd', '2345'));
console.log(parking.addCar('c', '3'));
parking.pay('3')
console.log(parking.addCar('b', '2'));
console.log(parking.addCar('a', '1'));

console.log(parking.getStatistics());

// console.log(parking.addCar('carModel', '1234'));
// console.log(parking.addCar('car', '2345'));
// console.log(parking.pay('1234'));
// console.log(parking.removeCar('1234'));


// const parking = new Parking(12);

// console.log(parking.addCar("Volvo t600", "TX3691CA"));

// console.log(parking.addCar("Volvo b", "TX3611CA"));
// console.log(parking.getStatistics());

// console.log(parking.pay("TX3691CA"));
// console.log(parking.removeCar("TX3691CA"));

