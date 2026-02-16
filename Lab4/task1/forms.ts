import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <p>Framework: {{ favoriteFramework }}</p>

    <label for="framework">Favorite Framework:</label>
    <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
  `,
  imports: [FormsModule],
})
export class AppComponent {
  favoriteFramework = '';
}