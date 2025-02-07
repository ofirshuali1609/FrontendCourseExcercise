import { QueryDocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { destination } from "./model/destination";

export const destinationConverter = {
    toFirestore: (destination: destination) => {
        // Assuming the model doesn't have combined date and time fields like Flight
        return {
            code: destination.code,
            name: destination.name,
            airportName: destination.airportName,
            airportUrl: destination.airportUrl,
            imageUrl: destination.imageUrl
        };
    },

    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): destination => {
        const data = snapshot.data(options);
        return new destination(
            data["code"],
            data["name"],
            data["airportName"],
            data["airportUrl"],
            data["imageUrl"] 
        ) ;
    }
};
