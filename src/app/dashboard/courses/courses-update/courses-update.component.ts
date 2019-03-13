import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/courses/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/courses/interfaces/course';

@Component({
  selector: 'app-courses-update',
  templateUrl: './courses-update.component.html',
  styleUrls: ['./courses-update.component.scss']
})
export class CoursesUpdateComponent implements OnInit {
  course$: Observable<Course>;
  constructor(
    private service: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: any) => {
        this.course$ = this.service.findOne(params.id)
      })
  }
  onSave(course: Course) {
    this.service.update(course)
      .subscribe((response) => {
        this.router.navigateByUrl('/courses');
      })
  }
}
