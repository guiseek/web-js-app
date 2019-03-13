import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesCreateComponent } from './courses-create/courses-create.component';
import { CoursesUpdateComponent } from './courses-update/courses-update.component';
import { CoursesFormComponent } from 'src/app/courses/courses-form/courses-form.component';
import { CoursesModule as CourseModule } from 'src/app/courses/courses.module';
@NgModule({
  declarations: [CoursesListComponent, CoursesCreateComponent, CoursesUpdateComponent],
  imports: [
    CommonModule,
    CourseModule,
    CoursesRoutingModule
  ],
  entryComponents: [
    CoursesFormComponent
  ]
})
export class CoursesModule { }
