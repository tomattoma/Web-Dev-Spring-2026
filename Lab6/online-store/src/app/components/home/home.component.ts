import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Welcome to Album Browser</h1>
    <p>This is a simple application to browse and manage your photo albums.</p>
    <button routerLink="/albums">Browse Albums</button>
  `
})
export class HomeComponent {}