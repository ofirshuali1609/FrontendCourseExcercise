import { Component, Input, input } from '@angular/core';
import { FlightsService } from '../../service/flights/flights.service';
import { Flight } from '../../model/flight';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-flight',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {

  @Input() flightNo ='0';
  flight !: Flight | undefined; 


    constructor(private flightService: FlightsService) { 
    }
    ngOnInit(): void {
      this.flight = this.flightService.get(this.flightNo);  }
    }

