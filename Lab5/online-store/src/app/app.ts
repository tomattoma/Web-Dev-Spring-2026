import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductsService } from './services/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <h1 style="text-align: center; font-family: sans-serif; margin-top: 30px;">Kaspi Shop</h1>

    <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
      @for (cat of categories; track cat.id) {
        <button 
          (click)="selectCategory(cat.id)"
          [style.background-color]="selectedCategoryId === cat.id ? '#007bff' : '#f0f0f0'"
          [style.color]="selectedCategoryId === cat.id ? 'white' : 'black'"
          style="padding: 10px 20px; cursor: pointer; border-radius: 8px; border: 1px solid #ddd; font-weight: 500; transition: 0.3s;">
          {{ cat.name }}
        </button>
      }
    </div>

    @if (selectedCategoryId) {
      <app-product-list 
        [products]="selectedProducts" 
        (removeProduct)="handleRemove($event)">
      </app-product-list>
    } @else {
      <p style="text-align: center; color: #777; font-size: 1.2rem; margin-top: 50px;">
        Please select a category to see products!
      </p>
    }
  `
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedProducts: Product[] = [];
  selectedCategoryId: number | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Получаем категории из сервиса при инициализации
    this.categories = this.productsService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    // Обновляем список товаров в зависимости от категории
    this.selectedProducts = this.productsService.getProductsByCategory(id);
  }

  // Удаление товара из текущего отображения
  handleRemove(productId: number) {
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
  }
}