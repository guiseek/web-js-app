import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/modules/product/interfaces/product';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss']
})
export class ProductsUpdateComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  productForm: FormGroup;
  productSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      _id: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [],
      amount: [],
      weight: [],
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.productSub = this.service.findOne(params.id)
          .subscribe((product: Product) => {
            this.productForm.patchValue(product);
          })
      })
  }
  onSubmit() {
    let { _id, ...data } = this.productForm.value;
    this.service.update(_id, data).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['/dashboard','products'])
      }
    )
  }
  ngOnDestroy() {
    return this.productSub && this.productSub.unsubscribe()
  }
}
