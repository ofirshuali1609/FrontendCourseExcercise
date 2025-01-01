import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightsService } from '../service/flights/flights.service';


@Component({
  selector: 'app-last-minute-flight',
  imports: [MatCardModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './last-minute-flight.component.html',
  styleUrl: './last-minute-flight.component.css'
})
export class LastMinuteFlightComponent implements OnInit {
    flights : Flight[] = [];
    flightsAvailableNextWeek: boolean = false;
  constructor(private flightService: FlightsService) {
  }
  ngOnInit(): void {
    this.flights = this.flightService.list();
    this.checkFlightsAvailableNextWeek();

  }

  hasFlightInNextWeek(boardingDate: any): boolean {
    const date = new Date(boardingDate);
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    return date >= today && date <= nextWeek;
  }
  checkFlightsAvailableNextWeek() {
    this.flightsAvailableNextWeek = this.flights.some(flight => this.hasFlightInNextWeek(flight.boradingDate));
  }


}

