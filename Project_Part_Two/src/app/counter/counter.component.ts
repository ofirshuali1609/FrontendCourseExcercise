import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 0 ; 

  inc() { 
    this.counter ++ ; 
  }

  deinc() { 
    this.counter -- ; 
  }

}
