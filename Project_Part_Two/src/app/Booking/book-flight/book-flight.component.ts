import { Component, Input, input, signal } from '@angular/core';
import { FlightsService } from '../../service/flights/flights.service';
import { Flight } from '../../model/flight';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { booking } from '../../model/booking';
import { BookingsService } from '../../service/booking/booking.service';
import { Passenger } from '../../model/passenger';

@Component({
  selector: 'app-book-flight',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,FormsModule,MatSelectModule,NgFor],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  numPassengers: number = 0; // Number of passengers
  passengers: { name: string, passport: number, baggages: number }[] = []; // Array to hold passenger data

  @Input() flightNo = '0';
  flight!: Flight | undefined;

  newBooking = new booking(this.flightNo, [new Passenger('', 0, 0)], 0);

  constructor(private flightService: FlightsService, private bookingsService: BookingsService) {}

  ngOnInit(): void {
    this.flightService.get(this.flightNo).then((flights) => (this.flight = flights));
  }

  // פונקציה שמייצרת את השדות הדינמיים לנוסעים
  generatePassengerFields() {
    this.passengers = [];
    for (let i = 0; i < this.numPassengers; i++) {
      this.passengers.push({ name: '', passport: 0, baggages: 0 }); // מאתחל עם ערכים מספריים
    }
  }

  // פונקציה לשמירת ההזמנה והנוסעים
  onSubmit() {
    this.newBooking.flight = this.flightNo
    this.bookingsService.add(this.newBooking);
    const booking: booking = {
      flight: this.flight?.origin + ' to ' + this.flight?.destination, // תצורת השם של הטיסה
      passengers: this.passengers,  // נוסעים
      numOfPassengers: this.passengers.length  // עדכון מספר הנוסעים
    };
  }

}
