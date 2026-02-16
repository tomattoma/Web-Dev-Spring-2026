import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div style="display: flex; flex-wrap: wrap; justify-content: center;">
      <app-product-card *ngFor="let item of products" [product]="item"></app-product-card>
    </div>
  `
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128Gb black',
      price: 370000,
      description: 'Smartphone',
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium'
        
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'

    },
    {
      id: 2,
      name: 'iPhone 16 128Gb white',
      price: 446945,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',        
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h8f/87295471190046.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'

    },
    {
      id: 3,
      name: 'Apple iPad Air 11 2025 128Gb gray',
      price: 329899,
      description: 'Tablet',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000'

    },
    {
      id: 4,
      name: 'Apple iPad mini 8.3 2024 128Gb blue',
      price: 303966,
      description: 'Tablet',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p4f/pd7/11583359.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/pd7/11583359.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc7/pd4/11583361.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-mini-8-3-2024-wi-fi-8-3-djuim-8-gb-128-gb-goluboi-130961071/?c=750000000'

    },
        {
      id: 5,
      name: 'Redmi A3x 3Gb/64Gb black',
      price: 56900,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'

    },
        {
      id: 6,
      name: 'Realme C71 8Gb/256Gb green',
      price: 92990,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p03/pc1/57994064.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p58/pc1/57994067.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p51/pc4/57994073.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/realme-c71-8-gb-256-gb-zelenyi-140029812/?c=750000000'

    },
        {
      id: 7,
      name: 'iPhone 17 Pro Max 256Gb blue',
      price: 829200 ,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-temno-sinii-145440732/?c=750000000'

    },
        {
      id: 8,
      name: 'Samsung Galaxy A36 5G ',
      price: 166990,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p4c/p39/30554064.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p39/30554065.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd9/p39/30554069.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a36-5g-8-gb-256-gb-chernyi-136435352/?c=750000000'

    },
    {
      id: 9,
      name: 'Samsung Galaxy S25 Ultra 5G',
      price: 560652,
      description: 'Smartphone',
      rating: 5,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000'

    },
    {
      id: 10,
      name: 'iPhone 16 128Gb white',
      price: 446945,
      description: 'Smartphone',
      rating: 5,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h66/h8f/87295471190046.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000'

    }
    
  ];
}