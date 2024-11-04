import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalcComponent } from "./calc/calc.component";
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalcComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ng Unit Testing Demo!';

  x = "sample app";

  getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
}
