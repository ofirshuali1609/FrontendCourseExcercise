export class Bookings {
    constructor(origin, destination, boardDate, boardTime, arrivalDate, arrivalTime, noSeat, destUrl) {
        this.origin = origin;
        this.destination = destination;
        this.boardDate = boardDate;
        this.boardTime = boardTime;
        this.arrivalDate = arrivalDate;
        this.arrivalTime = arrivalTime;
        this.noSeat = noSeat;
        this.destUrl  = destUrl; 
    }
}

export const books = [
    new Bookings("New York", "London", "2024-12-01", "13:01", "2024-12-02", "14:02", 5, "../pictures/London City.jpg"),
    new Bookings("San Francisco", "Tokyo", "2024-12-03", "15:03", "2024-12-04", "16:04", 10, "../pictures/Tokyo.jpg")
] 
