import { Component, Input } from '@angular/core';
import { DestinastionsService } from '../../service/destination/destinastions.service';
import { destination } from '../../model/destination';

@Component({
  selector: 'app-show-destination',
  imports: [],
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


