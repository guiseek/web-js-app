import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/courses/interfaces/course';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses$: Observable<Course[]>
  constructor(
    private service: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh()
  }
  onRefresh() {
    this.courses$ = this.service.findAll()
  }
  onCreate() {
    this.router.navigate(['create'], { relativeTo: this.route })
  }
  onEdit(id: string) {
    this.router.navigate(['update', id], { relativeTo: this.route })
  }
  onRemove(id: string) {
    this.service.remove(id)
      .subscribe(() => this.onRefresh())
  }
}
