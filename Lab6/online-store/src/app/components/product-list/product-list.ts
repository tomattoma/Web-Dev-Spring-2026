import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 20px;">
      
      @for (item of products(); track item.id) {
        <app-product-card 
          [product]="item" 
          (remove)="onRemove($event)">
        </app-product-card>
      } @empty {
        <p>No products found in this category.</p>
      }

    </div>
  `
})
export class ProductListComponent {

  products = input<Product[]>([]); 
  
  removeProduct = output<number>();

  onRemove(id: number) {
    this.removeProduct.emit(id);
  }
}