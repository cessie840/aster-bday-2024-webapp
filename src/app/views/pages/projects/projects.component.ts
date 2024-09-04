import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie';
import { ComicProjectShowcasePopupComponent } from '../../popups/comic-project-showcase-popup/comic-project-showcase-popup.component';
import { JESS_COMIC_PROJECT_IMAGES } from 'src/app/data/ComicImages';

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

  private screenWidth!: number;
  private screenHeight!: number;

  constructor(
    private cookieService: CookieService,
    private dialog: MatDialog,
  ) {
    if (this.cookieService.get(COOKIE_PROJECTS_PAGE_UNLOCKED) === '1') {
      this.isPageLocked = false;
    }

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
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

  // TODO: would need project details passed in here; for now just testing Jess comic project display
  openProject() {
    this.dialog.open(ComicProjectShowcasePopupComponent, {
      data: {
        title: 'Jess Project title',
        description: '(Description and Project tweet link)',
        imgs: JESS_COMIC_PROJECT_IMAGES,
      },
      minWidth: this.screenWidth <= 1200 / .75 ? '1000px' : '1200px',
      height: this.screenHeight <= 700 / .85 ? '80%' : '700px',
      autoFocus: false,
    });
  }
}
