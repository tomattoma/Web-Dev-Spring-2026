import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <h1 style="text-align: center;">Kaspi Shop</h1>
    <app-product-list></app-product-list>
  `
})
export class App {} // Важно: имя должно быть App, чтобы main.ts не ругался