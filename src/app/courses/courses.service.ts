import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './interfaces/course';
import { take, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private endpoint: string = environment.api + '/courses';
  constructor(
    private http: HttpClient
  ) { }
  findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.endpoint)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
  findOne(id: string): Observable<Course> {
    return this.http.get<Course>(this.endpoint + '/' + id).pipe(take(1));
  }
  create(course: Course) {
    return this.http.post(this.endpoint, course).pipe(take(1));
  }
  update(course: Course) {
    return this.http.put(this.endpoint + '/' + course._id, course).pipe(take(1));
  }
  remove(id: string): Observable<Course> {
    return this.http.delete<Course>(this.endpoint + '/' + id).pipe(take(1));
  }
}
