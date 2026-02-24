import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  // Импортируем CommonModule для базовых функций и нашу карточку
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
  /**
   * Входные данные: список товаров, полученный от AppComponent
   * Используем input signal (Angular 17.1+)
   */
  products = input<Product[]>([]); 
  
  /**
   * Выходные данные: событие удаления товара
   * Передает ID товара наверх в AppComponent
   */
  removeProduct = output<number>();

  /**
   * Метод срабатывает, когда в ProductCardComponent нажата кнопка "Удалить"
   * @param id уникальный идентификатор товара
   */
  onRemove(id: number) {
    // Пробрасываем событие дальше родителю
    this.removeProduct.emit(id);
  }
}