import {Component} from '@angular/core';
import {ReactiveFormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework.value }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [formControl]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,

  imports: [ReactiveFormsModule],
})
export class User {
  favoriteFramework = new FormControl('');
  username = 'youngTech';

  showFramework() {
    this.favoriteFramework.setValue('Angular');
  }
}