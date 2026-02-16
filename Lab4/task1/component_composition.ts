import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
  <section><app-user /></section>
    `, imports: [User]
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: ``,
  imports: [],
})
export class App {}
