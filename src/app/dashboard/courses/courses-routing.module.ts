import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'create',
    component: CoursesCreateComponent,
  },
  {
    path: 'update/:id',
    component: CoursesUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
