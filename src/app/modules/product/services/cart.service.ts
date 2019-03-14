import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  cart$ = this.cart.asObservable();

  constructor() {
  }
  
  get products() {
    return this.cart.value;
  }
  remove(index: number) {
    const products = this.cart.value;
    products.splice(index, 1);
    this.cart.next([ ...products ]);
  }
  addToCart(product: Product) {
    const products = this.cart.value;
    this.cart.next([ ...products, product])
  }
}
