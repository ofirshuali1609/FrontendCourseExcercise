import { Component, Input } from '@angular/core';
import { DestinastionsService } from '../../service/destination/destinastions.service';
import { destination } from '../../model/destination';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-show-destination',
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule,MatNativeDateModule,MatDatepickerModule,MatInputModule,FormsModule,MatSelectModule],
  templateUrl: './show-destination.component.html',
  styleUrl: './show-destination.component.css'
})
export class ShowDestinationComponent {
  @Input() code ='0';
  destination !: destination | undefined;

  constructor(private DestinastionsService: DestinastionsService) {
  }
  ngOnInit(): void {
    this.destination = this.DestinastionsService.get(this.code);  }
  }


