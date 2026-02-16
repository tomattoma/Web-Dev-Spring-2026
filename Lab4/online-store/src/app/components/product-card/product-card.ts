import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
template: `
  <div style="border: 1px solid #eee; padding: 15px; margin: 10px; border-radius: 12px; width: 250px; display: flex; flex-direction: column; align-items: center;">
    
    <img [src]="product.images[0]" style="width: 200px; height: 200px; object-fit: contain;">

    <div style="display: flex; gap: 5px; margin-top: 10px;">
      <img *ngFor="let img of product.images" [src]="img" 
           style="width: 40px; height: 40px; border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
    </div>

    <h3>{{ product.name }}</h3>
    <p>Цена: {{ product.price }} ₸</p>
    <button (click)="share()">Share</button>
    <br>
    <a [href]="product.link" target="_blank">Купить на Kaspi</a>
  </div>
`
})
export class ProductCardComponent {
  @Input() product!: Product;

  share() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }
}