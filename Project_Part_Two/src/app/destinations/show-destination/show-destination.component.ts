import { Component, Input } from '@angular/core';
import { DestinationsService } from '../../service/destination/destinations.service';
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

  Newdestination = new destination( "", "","", "", "");

  constructor(private destinationsService: DestinationsService) {}


  onSubmit() {
    this.destinationsService.add(this.Newdestination);
    console.log("Form Submitted");
  }
  ngOnInit(): void {
    console.log("onInit");
    if (this.code) {
      this.destinationsService.get(this.code).then(
        (temp?: destination) => {
          if (temp) {
            this.Newdestination = temp;
            console.log("Destination found");
          } else {
             console.log("Destination not found");
          }
        }
      )
    }
  }
}

