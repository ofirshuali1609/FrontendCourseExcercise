import { Component, Input, OnInit } from '@angular/core';
import { Flight } from '../../model/flight';
import { FlightsService } from '../../service/flights/flights.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-show-flight',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,FormsModule,MatSelectModule],
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
