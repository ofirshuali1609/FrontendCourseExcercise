export class Flight {
    constructor(
        public flightNo: string,
        public origin: string,
        public destination: string,
        public boradingDate: Date,
        public bordingTime: string,
        public arrivalDate: Date,
        public arrivalTime: string,
        public numberOfSeats: number,
        public imageUrl: string
    ) {}
} 
