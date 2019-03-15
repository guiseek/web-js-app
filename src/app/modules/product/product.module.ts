import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { CartComponent } from './cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatListModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ProductFormComponent, CartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [ProductFormComponent, CartComponent]
})
export class ProductModule { }
