import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { BookingService } from '../../service/booking/booking.service';
import { booking } from '../../model/booking';

@Component({
  selector: 'app-my-bookings',
  imports: [MatCardModule, MatButtonModule, RouterModule, NgFor],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  bookings !: booking[];

  constructor(private bookingService: BookingService) { }
  ngOnInit(): void {
    this.bookings = this.bookingService.list();
    if (!this.bookings) {
      console.error('No bookings available');
    }
    }

    }

