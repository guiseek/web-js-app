import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CoursesFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CoursesFormComponent]
})
export class CoursesModule { }
