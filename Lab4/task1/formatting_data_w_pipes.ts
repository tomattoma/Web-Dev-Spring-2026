import {Component} from '@angular/core';
import {DecimalPipe, CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Number with "decimal" pipe: {{ num | number: '1.2-2' }}</li>
      
      <li>Currency with "currency" pipe: {{ cost | currency }}</li>
      
      <li>Date with "date" pipe: {{ birthday | date: 'longDate' }}</li>
    </ul>
  `,
  imports: [DecimalPipe, CurrencyPipe, DatePipe],
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(1988, 3, 15); 
  cost = 4560.21;
}