class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {'child': 150, 'student': 300, 'collegian': 500};
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let conditionInConditions = false;

        for (const currentCondition of Object.keys(this.priceForTheCamp)) {
            if (currentCondition === condition) {
                conditionInConditions = true;
                break;
            }
        }
        if (conditionInConditions === false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let participant = this.getParticipant(name, this.listOfParticipants);

        if (participant !== undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        let campPrice = this.priceForTheCamp[condition];

        if (campPrice > money) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        let newParticipant = {name, condition, power:100, wins:0};
        this.listOfParticipants.push(newParticipant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let participant = this.getParticipant(name, this.listOfParticipants);

        if (participant === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(obj => obj['name'] !== name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            let firstParticipantObj = this.getParticipant(participant1, this.listOfParticipants);
            let secondParticipantObj = this.getParticipant(participant2, this.listOfParticipants);

            if (firstParticipantObj === undefined || secondParticipantObj === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            if (firstParticipantObj['condition'] !== secondParticipantObj['condition']) {
                throw new Error('Choose players with equal condition.');
            }
            let winner= undefined;

            if (firstParticipantObj['power'] < secondParticipantObj['power']) {
                winner = secondParticipantObj;
            } else if (firstParticipantObj['power'] > secondParticipantObj['power']) {
                winner = firstParticipantObj;
            }

            if (winner !== undefined) {
                winner['wins'] += 1;
                return `The ${winner['name']} is winner in the game ${typeOfGame}.`;
            } 
            return 'There is no winner.';

        } else if (typeOfGame == 'Battleship') {
            let firstParticipantObj = this.getParticipant(participant1, this.listOfParticipants);

            if (firstParticipantObj === undefined) {
                throw new Error('Invalid entered name/s.');
            }

            firstParticipantObj['power'] += 20;
            return `The ${firstParticipantObj['name']} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        let participantsArray = [];

        this.listOfParticipants
        .sort((a,b) => b['wins'] - a['wins'])
        .forEach(obj => participantsArray.push(`${obj['name']} - ${obj['condition']} - ${obj['power']} - ${obj['wins']}`))  

        result += participantsArray.join('\n');
        return result;
    }
    
    getParticipant(name, participants) {
        let participant = undefined;

        for (const participantObj of participants) {
            if (participantObj['name'] === name) {
                participant = participantObj;
                break;
            }
        }
        return participant;
    }
}


// // test registerParticipant functionality
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));


// // test unregisterParticipant functionality
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// // console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));


// // test battle functionality
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// // test every functionality
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// // console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());

// my functionality test

const camp = new SummerCamp('Vladi Genov', 'Belmeken');

console.log(camp.registerParticipant('Kaloyan', 'student', 300));
console.log(camp.registerParticipant('Viktor', 'student', 500));
console.log(camp.unregisterParticipant('Viktor'));
console.log(camp.listOfParticipants);


