import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  // TODO: Populate products from database and return Observable
  products: Product[] = [
    new Product(1, 'Product 1', 'P1 description, the product is tastey', 100),
    new Product(2, 'Product 2', 'P2 description, the product is tastey', 300),
    new Product(3, 'Product 3', 'P3 description, the product is tastey', 50),
    new Product(4, 'Product 4', 'P4 description, the product is tastey', 20),
    new Product(5, 'Product 5', 'P5 description, the product is tastey', 400),
    new Product(6, 'Product 6', 'P6 description, the product is tastey', 40),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }

}
