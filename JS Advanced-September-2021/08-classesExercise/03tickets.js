function tickets(arrayOfStrings, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        };

        compareTo(b, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(b[criteria]);
            }
            return this[criteria] - b[criteria];
        }
    } 
    
    const tickets = [];
    arrayOfStrings.forEach(el => {
        [city, price, availableStatus] = el.split('|');
        tickets.push(new Ticket(city, Number(price), availableStatus));
    })
    tickets.sort((a,b) => a.compareTo(b, sortingCriteria));
    return tickets;
}

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'destination'
// ));