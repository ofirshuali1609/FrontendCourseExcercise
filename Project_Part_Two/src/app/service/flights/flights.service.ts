import { Injectable } from '@angular/core';
import { Flight } from '../../model/flight';
import { doc, setDoc, Firestore, collection, getDocs, deleteDoc, query } from '@angular/fire/firestore';
import { flightConverter } from '../../flight-converter';
import {  where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  constructor(private firestore: Firestore) { }

  async list(): Promise<Flight[]> {
    const flightscollcetion = collection(this.firestore, 'flights').withConverter(flightConverter);
    const querySnapshot = await getDocs(flightscollcetion);
    return querySnapshot.docs.map((doc) => doc.data());
  }

  async get(flightNo: string): Promise<Flight | undefined> {
    const flightscollcetion = collection(this.firestore, 'flights').withConverter(flightConverter);
    const q = query(flightscollcetion, where("flightNo", "==", flightNo));
    const snapshot = await getDocs(q);    
    return snapshot.docs.length ? (snapshot.docs[0].data() as Flight) : undefined;
  }

  async delete(flightNo: string): Promise<void> { 
    const flightscollcetion = collection(this.firestore, 'flights').withConverter(flightConverter);
    const q = query(flightscollcetion, where("flightNo", "==", flightNo));
    const snapshot = await getDocs(q);
    if (snapshot.docs.length) {
      const docRef = doc(this.firestore, 'flights', snapshot.docs[0].id);
      await deleteDoc(docRef);
    }
  }

  async add(NewFlight: Flight): Promise<void> {
    const flightDocRef = doc(this.firestore, 'flights', NewFlight.flightNo).withConverter(flightConverter);
    await setDoc(flightDocRef, NewFlight);
  }
}


  /*
    private flights = [
      new Flight('W61283','Tel Aviv','Krakow',new Date('2025-01-18'),
      '10:30',new Date('2025-02-10'),'14:00','Sky',180, 'https://www.gotravel.co.il/userfiles/_big_5697A25AD12034304C7A02DE637217A8.png'),
      new Flight('LX8396','Larnaca','Zurich',new Date('2025-02-04'),
      '12:45',new Date('2025-02-15'),'17:00','Shopping',150,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT2BzoMCWETyqHPHEhqC3tbszeXIKKESzuLA&s'),
      new Flight('AA101','New York','London',new Date('2025-03-20'),
      '16:00',new Date('2025-03-21'),'06:30',
      'Shopping',250,'https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I='),
      new Flight('BA202','Berlin','Paris',new Date('2025-04-05'),
      '09:00',new Date('2025-04-05'),'11:15'
      ,'Shopping',200,'https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=612x612&w=gi&k=20&c=IqPxTHAULIOeH7F82Vusgi2tsyFitg4VrXOyDajEZks='),
      new Flight('CA303','Moscow','Tokyo',new Date('2025-05-10'),
       '22:00',new Date('2025-05-11'),'13:00','tour',
       300,'https://t3.ftcdn.net/jpg/02/65/23/70/360_F_265237090_Muthvb72m2POYFjyx7F5UCQLh9JdBtKN.jpg'),
      new Flight('DA404','Sydney','Los Angeles',new Date('2025-06-01'),
      '20:00',new Date('2025-06-01'),'15:30',
      'tour',220,'https://a.travel-assets.com/findyours-php/viewfinder/images/res40/475000/475457-Los-Angeles.jpg'),
      ]
  */
