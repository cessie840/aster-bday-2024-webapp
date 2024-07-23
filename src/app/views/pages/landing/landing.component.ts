import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  pwd = '';
  errorMsg = '';

  constructor(
    private router: Router,
  ) {

  }

  enterPassword() {
    if (this.pwd != 'test') {
      this.errorMsg = 'Incorrect password';
      return;
    }

    this.router.navigateByUrl('/home');
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.enterPassword();
    }
  }
}
