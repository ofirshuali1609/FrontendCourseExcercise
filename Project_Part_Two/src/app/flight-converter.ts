import { QueryDocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { Flight } from "./model/flight";

import { Timestamp } from "firebase/firestore"; // Ensure Firebase is imported

export const flightConverter = {
    toFirestore: (flight: Flight) => {
        // If the time is provided, combine it with the date
        const boradingDateTime = flight.boradingDate && flight.bordingTime ? new Date(flight.boradingDate.setHours(
            Number(flight.bordingTime.split(':')[0]),  // Convert hours from string to number
            Number(flight.bordingTime.split(':')[1])   // Convert minutes from string to number
        )) : null;

        const arrivalDateTime = flight.arrivalDate && flight.arrivalTime ? new Date(flight.arrivalDate.setHours(
            Number(flight.arrivalTime.split(':')[0]),  // Convert hours from string to number
            Number(flight.arrivalTime.split(':')[1])   // Convert minutes from string to number
        )) : null;

        return {
            flightNo: flight.flightNo,
            origin: flight.origin,
            destination: flight.destination,
            boradingDate: boradingDateTime ? Timestamp.fromDate(boradingDateTime) : null,
            arrivalDate: arrivalDateTime ? Timestamp.fromDate(arrivalDateTime) : null,
            category: flight.category,
            numberOfSeats: flight.numberOfSeats,
            imageUrl: flight.imageUrl
        };
    },

    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Flight => {
        const data = snapshot.data(options);
        // Convert timestamp back to Date and combine with time
        const boradingDate = data["boradingDate"] ? data["boradingDate"].toDate() : new Date();
        const arrivalDate = data["arrivalDate"] ? data["arrivalDate"].toDate() : new Date();

        return new Flight(
            data["flightNo"],
            data["origin"],
            data["destination"],
            boradingDate,
            data["bordingTime"],
            arrivalDate,
            data["arrivalTime"],
            data["category"],
            data["numberOfSeats"],
            data["imageUrl"] 
        );
    }
};

