import { Component, input, output } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid #eee; padding: 15px; margin: 10px; border-radius: 12px; width: 260px; height: 550px; display: flex; flex-direction: column; align-items: center; background: white; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      
      <img [src]="product().images[0]" style="width: 200px; height: 200px; object-fit: contain;">

      <div style="display: flex; gap: 5px; margin-top: 10px; height: 45px; overflow: hidden;">
        @for (img of product().images; track $index) {
          <img [src]="img" style="width: 40px; height: 40px; border: 1px solid #ddd; border-radius: 4px; object-fit: cover;">
        }
      </div>

      <div style="flex-grow: 1; text-align: center; display: flex; flex-direction: column; justify-content: space-between; width: 100%;">
        <h3 style="font-size: 1.1rem; margin: 15px 0 10px; height: 3em; overflow: hidden;">{{ product().name }}</h3>
        <p style="font-weight: bold; color: #333;">Цена: {{ product().price }} ₸</p>
        
        <button (click)="like()" style="cursor: pointer; background: none; border: 1px solid #ff4d4f; color: #ff4d4f; border-radius: 20px; padding: 5px 15px; margin-bottom: 10px;">
          ❤️ {{ product().likes }}
        </button>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button (click)="share()" style="background: #0088cc; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">Share to Telegram</button>
          
          <a [href]="product().link" target="_blank" style="text-decoration: none; background: #f5a623; color: white; padding: 8px; border-radius: 6px; text-align: center; font-size: 0.9rem;">Купить на Kaspi</a>
          
          <button (click)="onRemove()" style="background: none; border: none; color: #999; cursor: pointer; font-size: 0.8rem; margin-top: 5px;">Удалить товар</button>
        </div>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  product = input.required<Product>(); 
  remove = output<number>(); 

  share() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}`;
    window.open(url, '_blank');
  }

  like() {
    this.product().likes++;
  }

  onRemove() {
    this.remove.emit(this.product().id);
  }
}