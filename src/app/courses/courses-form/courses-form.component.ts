import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../interfaces/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  form: FormGroup;
  @Input() course: Course;
  @Output() onSave = new EventEmitter();
  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      _id: [],
      name: [null, Validators.required],
      description: [null, Validators.required],
      objective: [null, Validators.required],
      workload: [null, Validators.compose([
        Validators.required,
        Validators.min(1)
      ])],
      period: this.fb.group({
        start: [null, Validators.required],
        end: [null, Validators.required]
      },{ validator: periodValidator })
    });
  }
  get period(): FormGroup {
    return this.form.get('period') as FormGroup;
  }
  ngOnInit() {
    if (this.course) {
      let { period, ...data } = this.course;
      this.form.patchValue({
        period: periodParser(period),
        ...data
      });
    }
  }
  onSubmit() {
    console.log(this.form.value)
    this.onSave.emit(this.form.value)
  }
}
function formatDate(date: Date) {
  return new Date(date).toISOString().split('T')[0]
}
function periodParser({start, end}) {
  return {
    start: formatDate(start),
    end: formatDate(end)
  }
}
function periodValidator(g: FormGroup) {
  return g.get('start').value < g.get('end').value
    ? null : { 'invalid': true };
}
