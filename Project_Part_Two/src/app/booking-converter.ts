import { QueryDocumentSnapshot, SnapshotOptions } from "@angular/fire/firestore";
import { booking  } from "./model/booking";
import { Passenger } from "./model/passenger";

// Converter לנוסע
export const passengerConverter = {
  toFirestore: (passengers: Passenger) => {
    return {
      name: passengers.name,
      passport: passengers.passport,
      baggages: passengers.baggages
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Passenger => {
    const data = snapshot.data(options);
    return {
      name: data["name"],
      passport: data["passport"],
      baggages: data["baggages"]
    };
  }
};

// Converter להזמנת טיסה (כולל נוסעים)
export const bookingConverter = {
  toFirestore: (booking: booking) => {
    return {
      flightNo: booking.flight,  // מספר טיסה
      passengers: booking.passengers.map(passenger => passengerConverter.toFirestore(passenger)),  // המרת נוסעים
      numOfPassengers: booking.passengers.length
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): booking => {
    const data = snapshot.data(options);
    return {
        flight: data["flight"],  // מספר טיסה
        passengers: data["passengers"].map((passengerData: any) => passengerConverter.fromFirestore(passengerData, options)),  // המרת נוסעים
        numOfPassengers: data["numOfPassengers"]
    };
  }
};
