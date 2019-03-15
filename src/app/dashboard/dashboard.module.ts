import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [DashboardComponent, UsersComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatProgressBarModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
