import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from 'src/app/modules/product/product.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [HomeComponent, PagesComponent],
  imports: [
    CommonModule,
    ProductModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
