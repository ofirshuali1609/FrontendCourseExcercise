import { QueryDocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { Flight } from "./model/flight";

export const flightConverter = {
    toFirestore: (flight: Flight) => {
        return {
                flightNo: flight.flightNo,
                origin: flight.origin,
                destination: flight.destination,
                boradingDate: flight.boradingDate,
                bordingTime: flight.bordingTime,
                arrivalDate: flight.arrivalDate,
                arrivalTime: flight.arrivalTime,
                category: flight.category,
                numberOfSeats: flight.numberOfSeats,
                imageUrl: flight.imageUrl

            };
    },
    fromFirestore: (snapshot : QueryDocumentSnapshot, options: SnapshotOptions) : Flight => {
        return new Flight("", "", "", new Date(), "", new Date(), "", "", 0, "");
    }
}