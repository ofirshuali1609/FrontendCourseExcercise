import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Flight } from '../../model/flight';
import { FlightsService } from '../../service/flights/flights.service';

@Component({
  selector: 'app-show-booking',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './show-booking.component.html',
  styleUrl: './show-booking.component.css'
})
export class ShowBookingComponent {
  @Input() flightNo ='0';
  flight !: Flight | undefined;


    constructor(private flightService: FlightsService) {
    }
    ngOnInit(): void {
      this.flight = this.flightService.get(this.flightNo);  }
    }

