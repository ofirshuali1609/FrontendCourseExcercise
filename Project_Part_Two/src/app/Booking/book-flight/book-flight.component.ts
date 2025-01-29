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

@Component({
  selector: 'app-book-flight',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,FormsModule,MatSelectModule,NgFor],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  numPassengers: number = 0; // Number of passengers
  passengers: { name: string, passportId: string }[] = []; // Array to hold passenger data

  @Input() flightNo = '0';
  flight!: Flight | undefined;

  constructor(private flightService: FlightsService) {}

  ngOnInit(): void {
    this.flightService.get(this.flightNo).then((flights) => (this.flight = flights));
  }

  // Function to generate passenger fields dynamically
  generatePassengerFields() {
    // Clear any previous passenger data before creating new fields
    this.passengers = [];
    for (let i = 0; i < this.numPassengers; i++) {
      this.passengers.push({ name: '', passportId: '' }); // Create an empty passenger object for each passenger
    }
  }
}
