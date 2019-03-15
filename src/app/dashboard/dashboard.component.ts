import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users/interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  user: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.auth.auth;
  }
  signOut() {
    this.auth.signOut();
    this.router.navigateByUrl('/auth/signin');
  }
}
