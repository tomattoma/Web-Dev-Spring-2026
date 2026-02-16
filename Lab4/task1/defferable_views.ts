import {Component} from '@angular/core';
import {Comments} from './comments';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      
      <article>
        <p>Angular is my favorite framework, and this is why...</p>
        <p>I can't express enough how much I enjoy working with Angular...</p>
        <p>Angular is my favorite framework, and this is why...</p>
        <p>I can't express enough how much I enjoy working with Angular...</p>
        <p>Angular is my favorite framework, and this is why...</p>
        <p>I can't express enough how much I enjoy working with Angular...</p>
      </article>

      @defer (on viewport) {
        <comments />
      } 
      @placeholder {
        <p>Future comments</p>
      } 
      @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
  `,
  imports: [Comments],
})
export class App {}

