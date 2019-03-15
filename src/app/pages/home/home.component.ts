import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/product/interfaces/product';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
