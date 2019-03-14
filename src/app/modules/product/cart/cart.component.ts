import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]>;

  constructor(
    private service: CartService
  ) { }

  ngOnInit() {
    this.cart$ = this.service.cart$;
  }
  remove(i: number) {
    console.log(i)
    this.service.remove(i)
  }
}
