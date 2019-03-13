import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/courses/interfaces/course';

@Component({
  selector: 'app-courses-create',
  templateUrl: './courses-create.component.html',
  styleUrls: ['./courses-create.component.scss']
})
export class CoursesCreateComponent implements OnInit {
  constructor(
    private service: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSave(data: Course) {
    this.service.create(data)
      .subscribe((response) => {
        this.router.navigateByUrl('/courses');
      })
  }
}
