import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section>
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  <section (mouseover)="showSecretMessage()">
  `,
})
export class App {
  message = '';

  showSecretMessage() {
  this.message = 'Way to go 🚀';
}
}
