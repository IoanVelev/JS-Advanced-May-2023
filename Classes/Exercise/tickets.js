function tickets(arr, criteria){
    let output = [];
    class Tickets {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

    }
    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        let currentTicket = new Tickets(destination, price, status);
        output.push(currentTicket)
    }
    switch (criteria) {
        case 'destination':
            output.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
            case 'price':
                output.sort((a, b) => a.price - b.price);
            break;
            case 'status':
                output.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return output;
}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'
))