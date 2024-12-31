import { Flight } from "./flight";
import { Passenger } from "./passenger";

export class booking {
    constructor(
        public flight : Flight,
        public passenger : Passenger
    ) {}
} 
