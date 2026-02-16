import {Component} from '@angular/core';
// Импортируем пайпы из общего пакета Angular
import {LowerCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <li>{{ username | lowercase }}</li>
    <li>{{ username | uppercase }}</li>
  `,
  // Обязательно добавляем их в список импортов компонента
  imports: [LowerCasePipe, UpperCasePipe],
})
export class AppComponent {
  username = 'yOunGteCh';
}