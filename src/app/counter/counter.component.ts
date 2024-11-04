import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h4>Let's playaround with counter</h4>
      <p>Counter Value: {{ counter }}</p>
      <button class="increment-btn" (click)="handleIncrement()">
        Increment
      </button>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {
  counter = 0;
  
  handleIncrement() {
    this.counter++;
  }
}
