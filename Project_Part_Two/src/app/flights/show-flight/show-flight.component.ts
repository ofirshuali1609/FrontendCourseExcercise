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
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-flight',
  imports: [ CommonModule, MatButtonModule, RouterModule, FormsModule,
    MatCardModule, MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,MatSelectModule],
  templateUrl: './show-flight.component.html',
  styleUrl: './show-flight.component.css'
})
export class ShowFlightComponent  {
  @Input() flightNo ='0';
  flight !: Flight | undefined;

  Newflight = new Flight("", "", "", new Date(''), "", new Date(''), "", "", 0, "");

  constructor(private flightService: FlightsService) { }

  onSubmit() {
    this.flightService.add(this.Newflight);
    console.log("Form Submitted");
  }

  ngOnInit(): void {
    //this.flightService.get(this.flightNo).then((flights) => (this.flight = flights)); 
    console.log("oninit");
    if (this.flightNo) {
        this.flightService.get(this.flightNo).then(
          (temp?: Flight) => {
            if (temp) {
              this.Newflight = temp;
              console.log("Flight found");
            } else { 
              console.log("Flight not found");
            }
           }
          );
     }
     //this.flightService.add(this.Newflight);
  }

}