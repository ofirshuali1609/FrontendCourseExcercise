import { Injectable } from '@angular/core';
import { destination } from '../../model/destination';
import { collection, Firestore, doc, getDocs, query, where } from 'firebase/firestore';
import { addDoc, deleteDoc } from '@angular/fire/firestore';
import { destinationConverter } from '../../destinations-converter';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private firestore: Firestore) {}


  async list(): Promise<destination[]> {
    const destinationsCollection = collection(this.firestore, 'destinations').withConverter(destinationConverter);
    const querySnapshot = await getDocs(destinationsCollection);
    return querySnapshot.docs.length ? querySnapshot.docs.map(doc => doc.data() as destination) : [];
  }

  async get(code: string): Promise<destination | undefined> {
    const destinationsCollection = collection(this.firestore, 'destinations').withConverter(destinationConverter);
    const q = query(destinationsCollection, where("code", "==", code));
    const snapshot = await getDocs(q);
    return snapshot.docs.length ? (snapshot.docs[0].data() as destination) : undefined;
  }

  async delete(code: string): Promise<void> {
    const destinationsCollection = collection(this.firestore, 'destinations').withConverter(destinationConverter);
    const q = query(destinationsCollection, where("code", "==", code));
    const snapshot = await getDocs(q);
    if (snapshot.docs.length) {
      const docRef = doc(this.firestore, 'destinations', snapshot.docs[0].id);
      await deleteDoc(docRef);
    }
  }

  async add(newDestination: destination): Promise<void> {
    const destinationsCollection = collection(this.firestore, 'destinations').withConverter(destinationConverter);
    await addDoc(destinationsCollection, newDestination);
  }
}
