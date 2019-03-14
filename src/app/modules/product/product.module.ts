import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ProductFormComponent, CartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ProductFormComponent, CartComponent]
})
export class ProductModule { }
