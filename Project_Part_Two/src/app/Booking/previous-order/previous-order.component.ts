import { Component, OnInit } from '@angular/core';
import { booking } from '../../model/booking';
import { BookingsService } from '../../service/booking/booking.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-order',
  imports: [MatCardModule, MatButtonModule,RouterModule , CommonModule],
  templateUrl: './previous-order.component.html',
  styleUrl: './previous-order.component.css'
})
export class PreviousOrderComponent implements OnInit {
  bookings !: booking[];
  today: Date = new Date();

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
  }
}
