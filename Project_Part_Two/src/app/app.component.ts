import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, RouterOutlet],
=======
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
>>>>>>> 892f9fb29bd60cf1c6122b1c6791015e42bafcdb
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
