import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/product/interfaces/product';
import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.products$ = this.productService.findAll();
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
