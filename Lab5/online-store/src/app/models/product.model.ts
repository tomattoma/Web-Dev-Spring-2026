export interface Product { 
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  images: string[];
  link: string;
  // нови поля 
  likes: number;      
  categoryId: number; 
}