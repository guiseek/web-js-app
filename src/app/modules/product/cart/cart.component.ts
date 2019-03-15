import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]>;
  total: number = 0;
  @Output() onCheckout = new EventEmitter();
  constructor(
    private service: CartService
  ) { }

  ngOnInit() {
    this.cart$ = this.service.cart$;
    this.cart$.subscribe((products: Product[]) => {
      this.total = products.reduce((prev, curr) => curr.price + prev, 0);
    });
  }
  remove(i: number) {
    this.service.remove(i);
  }
  checkout() {
    this.onCheckout.emit();
  }
}
