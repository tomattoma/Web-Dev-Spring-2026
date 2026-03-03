import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Tablets' },
    { id: 3, name: 'Laptops' },
    { id: 4, name: 'Accessories' }
  ];

  private products: Product[] = [
    // --- 1 SMARTPHONES ---
    {
      id: 1, categoryId: 1, name: 'iPhone 15 128Gb black', price: 370000, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2, categoryId: 1, name: 'iPhone 16 128Gb white', price: 446945, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'
    },
    {
      id: 5, categoryId: 1, name: 'Redmi A3x 3Gb/64Gb black', price: 56900, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
    {
      id: 6, categoryId: 1, name: 'Realme C71 8Gb/256Gb green', price: 92990, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/realme-c71-8-gb-256-gb-zelenyi-140029812/?c=750000000'
    },
    {
      id: 7, categoryId: 1, name: 'iPhone 17 Pro Max 256Gb blue', price: 829200, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000'
    },

    // --- 2 TABLETS ---
    {
      id: 3, categoryId: 2, name: 'Apple iPad Air 11 2025', price: 329899, 
      description: 'Tablet', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000'
    },
    {
      id: 4, categoryId: 2, name: 'Apple iPad mini 8.3 2024', price: 303966, 
      description: 'Tablet', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p4f/pd7/11583359.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-mini-8-3-2024-wi-fi-8-3-djuim-8-gb-128-gb-goluboi-130961071/?c=750000000'
    },
    {
      id: 8, categoryId: 2, name: 'Apple iPad A16 11 2025', price: 204044, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000'
    },
    {
      id: 9, categoryId: 2, name: 'Huawei MatePad 11.5 2025 PaperMatte 11.5', price: 224890, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p7f/p08/65766347.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-2025-papermatte-11-5-djuim-8-gb-256-gb-fioletovyi-podarok-145939369/?c=750000000'
    },
    {
      id: 10, categoryId: 2, name: ' Xiaomi Pad 6', price: 157004, 
      description: 'Smartphone', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000'
    },

    // --- 3 LAPTOPS  ---
    {
      id: 11, categoryId: 3, name: 'Apple MacBook Pro 16', price: 699990, 
      description: 'Laptop', rating: 4, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000'
    },
    {
      id: 12, categoryId: 3, name: 'Apple MacBook Air 13', price: 523993, 
      description: 'Laptop', rating: 4, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    {
      id: 13, categoryId: 3, name: 'Biraz EVO N95 15.6', price: 193500, 
      description: 'Laptop', rating: 4, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000'
    },
    {
      id: 14, categoryId: 3, name: 'Acer Gadget E10 ETBook 14', price: 283900, 
      description: 'Laptop', rating: 4, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
    },
    {
      id: 15, categoryId: 3, name: 'HYDRA Home H14 14', price: 115000, 
      description: 'Laptop', rating: 4, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p14/pe5/72877446.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/hydra-home-h14-14-12-gb-ssd-256-gb-win-11-mkii-119496808/?c=750000000'
    },

    // --- 4 ACCESSORIES ---
    {
      id: 16, categoryId: 4, name: 'Шарф кашемир 180 x 70 см', price: 1295, 
      description: 'Accessory', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/ha8/84255439585310.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/sharf-17344455-657898-kashemir-180-sm-x-70-sm-113986560/?c=750000000'
    },
    {
      id: 17, categoryId: 4, name: 'Сумка кросс-боди экокожа черный', price: 1347 , 
      description: 'Accessory', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p17/pb5/30561995.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/sumka-kross-bodi-18421090-720896071-ekokozha-chernyi-121701521/?c=750000000'
    },
    {
      id: 18, categoryId: 4, name: 'Ушанка размер универсальный, черный', price: 2498, 
      description: 'Accessory', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pce/p35/24104200.jpeg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/ushanka-000409d-razmer-universal-nyi-chernyi-134481977/?c=750000000'
    },
    {
      id: 19, categoryId: 4, name: 'Чемодан Longstar pc-001 поликарбонат 110 л темно-серый', price: 29999, 
      description: 'Accessory', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p3d/pb6/21684916.jpeg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/chemodan-longstar-pc-001-polikarbonat-110-temno-seryi-133836239/?c=750000000'
    },
    {
      id: 20, categoryId: 4, name: 'Кварцевые CASIO A159-W пластик', price: 14895, 
      description: 'Accessory', rating: 5, likes: 0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h85/h5c/64020485013534.jpg?format=gallery-medium'], 
      link: 'https://kaspi.kz/shop/p/kvartsevye-casio-a159-w-plastik-101151716/?c=750000000'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}