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

@Component({
  selector: 'app-book-flight',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,FormsModule,MatSelectModule],
  templateUrl: './book-flight.component.html',
  styleUrl: './book-flight.component.css'
})
export class BookFlightComponent {
  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  @Input() flightNo ='0';
  flight !: Flight | undefined;


    constructor(private flightService: FlightsService) {
    }
    ngOnInit(): void {
      this.flight = this.flightService.get(this.flightNo);  }
    }

