import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // TODO: Populate products from database and return Observable
  products: Product[] = [
    new Product(1, 'Product 1', 'P1 description, the product is tastey', 100, 'assets/cupcake.png'),
    new Product(2, 'Product 2', 'P2 description, the product is tastey', 300, 'assets/cupcake-2.jpg'),
    new Product(3, 'Product 3', 'P3 description, the product is tastey', 50, 'assets/cupcake-3.png'),
    new Product(4, 'Product 4', 'P4 description, the product is tastey', 20, 'assets/cupcake-4.jpg'),
    new Product(5, 'Product 5', 'P5 description, the product is tastey', 400, 'assets/cupcake-5.jpg'),
    new Product(6, 'Product 6', 'P6 description, the product is tastey', 40, 'assets/cupcake-6.jpg'),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
