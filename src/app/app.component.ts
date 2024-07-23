import { Component } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showTopNav: boolean;

  constructor(
    private router: Router,
  ) {
    this.showTopNav = this.router.url !== '/';

    this.router.events.pipe(
      filter((e: Event | RouterEvent): e is RouterEvent => e instanceof NavigationEnd)
    ).subscribe(e => {
      this.showTopNav = e.url !== '/';
    });
  }
}
