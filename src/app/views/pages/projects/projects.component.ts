import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie';

const COOKIE_PROJECTS_PAGE_UNLOCKED = 'ab-ppu';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  errorMsg = '';
  passwordValue = '';

  isPageLocked = true;

  constructor(
    private cookieService: CookieService,
  ) {
    if (this.cookieService.get(COOKIE_PROJECTS_PAGE_UNLOCKED) === '1') {
      this.isPageLocked = false;
    }
  }

  onPwdPromptKeydown(event: any) {
    if (event.key !== 'Enter') {
      return;
    }

    if (this.passwordValue != 'test') {
      this.errorMsg = 'INCORRECT PASSWORD';
      return;
    }

    this.errorMsg = '';
    this.isPageLocked = false;
    this.cookieService.put(COOKIE_PROJECTS_PAGE_UNLOCKED, '1');
  }
}
