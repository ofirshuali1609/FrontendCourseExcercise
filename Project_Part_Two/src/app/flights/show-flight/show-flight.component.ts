import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { FlightsService } from '../../service/flights/flights.service';

@Component({
  selector: 'app-show-flight',
  imports: [],
  templateUrl: './show-flight.component.html',
  styleUrl: './show-flight.component.css'
})
export class ShowFlightComponent implements OnInit {
  @Input() flightNo ='0'; 
  flight !: Flight | undefined; 

  constructor(private flightService: FlightsService) { 
  }
  ngOnInit(): void {
    this.flight = this.flightService.get(this.flightNo);  }
  }
