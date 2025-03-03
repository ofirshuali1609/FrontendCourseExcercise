import { Injectable } from '@angular/core';
import { booking } from '../../model/booking';
import { collection, deleteDoc, doc, Firestore, getDocs, query, setDoc } from '@angular/fire/firestore';
import { bookingConverter } from '../../booking-converter';
import { where } from 'firebase/firestore';


@Injectable({
    providedIn: 'root'
})
export class BookingsService {
    constructor(private firestore: Firestore) {
    }

    // פונקציה לרשימת כל הזמנות הטיסה
    async list(): Promise<booking[]> {
        const bookingsCollection = collection(this.firestore, 'flightBookings').withConverter(bookingConverter);
        const querySnapshot = await getDocs(bookingsCollection);
        return querySnapshot.docs.map((doc) => doc.data());
    }

    // פונקציה לקבלת הזמנה לפי מספר טיסה
    async get(flightNo: string): Promise<booking | undefined> {
        const bookingsCollection = collection(this.firestore, 'bookings').withConverter(bookingConverter);
        const q = query(bookingsCollection, where("flight", "==", flightNo));
        const snapshot = await getDocs(q);
        return snapshot.docs.length ? (snapshot.docs[0].data() as booking) : undefined;
    }

    // פונקציה למחיקת הזמנה לפי מספר טיסה
    async delete(flightNo: string): Promise<void> {
        const bookingsCollection = collection(this.firestore, 'bookings').withConverter(bookingConverter);
        const q = query(bookingsCollection, where("flight", "==", flightNo));
        const snapshot = await getDocs(q);
        if (snapshot.docs.length) {
            const docRef = doc(this.firestore, 'bookings', snapshot.docs[0].id);
            await deleteDoc(docRef);
        }
    }

    // פונקציה להוספת הזמנה חדשה
    async add(newBooking: booking): Promise<void> {
        console.log("add");
        const bookingDocRef = doc(this.firestore, 'bookings', newBooking.flight).withConverter(bookingConverter);
        await setDoc(bookingDocRef, newBooking);
    }

}