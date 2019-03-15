import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/interfaces/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/modules/product/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  displayedColumns = ['name', 'price', 'amount','edit'];
  products$: Observable<Product[]>;
  constructor(
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.products$ = this.productService.findAll();
  }
  onDelete(id: string) {
    this.productService.delete(id).subscribe(
      (response) => {
        console.log(response)
        this.onRefresh()
      },
      (error) => {
        console.error(error)
      }
    )
  }}
