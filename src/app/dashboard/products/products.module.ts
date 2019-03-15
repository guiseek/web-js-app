import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductModule } from 'src/app/modules/product/product.module';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatToolbarModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsCreateComponent, ProductsUpdateComponent],
  imports: [
    CommonModule,
    ProductModule,
    ProductsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class ProductsModule { }
