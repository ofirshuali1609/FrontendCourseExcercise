import { Passenger } from "./passenger";

export class booking {
    constructor(
        public flight : string,
        public passengers : Passenger[],
        public numOfPassengers : number,
    ) {}
} 
