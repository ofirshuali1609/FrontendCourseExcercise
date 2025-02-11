import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../service/booking/booking.service';
import { booking } from '../../model/booking';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-order',
  imports: [MatCardModule, MatButtonModule,RouterModule, CommonModule],
  templateUrl: './upcoming-order.component.html',
  styleUrl: './upcoming-order.component.css'
})

export class UpcomingOrderComponent implements OnInit {
  bookings !: booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
  }
}

