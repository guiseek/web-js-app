import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesUpdateComponent } from './courses-update.component';

describe('CoursesUpdateComponent', () => {
  let component: CoursesUpdateComponent;
  let fixture: ComponentFixture<CoursesUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
