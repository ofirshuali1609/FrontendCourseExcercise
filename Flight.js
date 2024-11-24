class Flight {
    constructor(flightNo, origin, destination, boardingDate, boardingTime, arrivalDate, arrivalTime) {
        this._flightNo = flightNo;
        this._origin = origin;
        this._destination = destination;
        this._boardingDate = boardingDate;
        this._boardingTime = boardingTime;
        this._arrivalDate = arrivalDate;
        this._arrivalTime = arrivalTime;
    }


    // Setters
    set flightNo(value) {
        this._flightNo = value;
    }

    set origin(value) {
        this._origin = value;
    }

    set destination(value) {
        this._destination = value;
    }

    set boardingDate(value) {
        this._boardingDate = value;
    }

    set boardingTime(value) {
        this._boardingTime = value;
    }

    set arrivalDate(value) {
        this._arrivalDate = value;
    }

    set arrivalTime(value) {
        this._arrivalTime = value;
    }

    displayDetails() {
        console.log(`Flight No: ${this.flightNo}`);
        console.log(`Origin: ${this.origin}`);
        console.log(`Destination: ${this.destination}`);
        console.log(`Boarding Date: ${this.boardingDate}`);
        console.log(`Boarding Time: ${this.boardingTime}`);
        console.log(`Arrival Date: ${this.arrivalDate}`);
        console.log(`Arrival Time: ${this.arrivalTime}`);
    }
}

// Example usage:
const myFlight = new Flight('1234', 'JFK', 'LAX', '2024-12-15', '18:00', '2024-12-15', '21:00');
myFlight.displayDetails();

// Setting a new destination
myFlight.destination = 'SFO';
console.log('Updated Destination:', myFlight.destination);
