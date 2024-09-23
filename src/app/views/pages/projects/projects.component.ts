import { NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie';
import { ComicProjectShowcasePopupComponent } from '../../popups/comic-project-showcase-popup/comic-project-showcase-popup.component';
import { JESS_COMIC_PROJECT_IMAGES } from 'src/app/data/ComicImages';
import { VideoProjectShowcasePopupComponent } from '../../popups/video-project-showcase-popup/video-project-showcase-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { GenericProjectShowcasePopupComponent } from '../../popups/generic-project-showcase-popup/generic-project-showcase-popup.component';
import { ComicImagesPreloaderService } from 'src/app/services/comic-images-preloader.service';

const COOKIE_PROJECTS_PAGE_UNLOCKED = 'ab-ppu';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgIf, FormsModule, MatButtonModule],
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
    private comicImagesPreloader: ComicImagesPreloaderService,
  ) {
    if (this.cookieService.get(COOKIE_PROJECTS_PAGE_UNLOCKED) === '1') {
      this.isPageLocked = false;
    }

    this.onResize();

    this.comicImagesPreloader.preloadComic();
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

    if (this.passwordValue != 'Stars Faded To Dust') {
      this.errorMsg = 'INCORRECT PASSWORD';
      return;
    }

    this.errorMsg = '';
    this.isPageLocked = false;
    this.cookieService.put(COOKIE_PROJECTS_PAGE_UNLOCKED, '1');
  }

  openProject(name: string) {
    // Dev note: for YT video src link: view YT video -> Share -> embed -> extract src attribute in given embed code

    // TODO: probably want the project data (title, description, etc.) to come from a const
    switch (name) {

      case 'Jess':
        this.dialog.open(ComicProjectShowcasePopupComponent, {
          data: {
            title: 'STARS BEYOND THE DOORS',
            description: "Aster Arcadia Comic Relay Project",
            imgs: JESS_COMIC_PROJECT_IMAGES,
            isSmallScreen: this.screenHeight <= 700 / .85 || this.screenWidth <= 1200 / .75,
            backgroundColor: 'rgb(104, 92, 204)',
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '500px' : '700px',
          autoFocus: false,
        });
        break;

      case 'Syndrie':
        this.dialog.open(VideoProjectShowcasePopupComponent, {
          data: {
            title: 'Celestial Showcase: Aster Arcadia',
            description: "A look into Aster Arcadia's streams and the reasons why his fans continue to keep coming back for more.",
            videoLink: 'https://www.youtube.com/embed/hAqxvClDTfc?si=WnXfPIblnnK7hv7J',
            backgroundColor: 'rgb(147, 113, 221)',
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      case 'Akira':
        this.dialog.open(VideoProjectShowcasePopupComponent, {
          data: {
            title: 'Project Title (Video Type)',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            videoLink: 'https://www.youtube.com/embed/hAqxvClDTfc?si=WnXfPIblnnK7hv7J',
            backgroundColor: 'rgb(105, 93, 207)',
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;
    
      case 'Milan':
        this.dialog.open(VideoProjectShowcasePopupComponent, {
          data: {
            title: 'Project Title (Video Type)',
            description: "Lorem Ipsum is simply dummy text of the printing and t a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            videoLink: 'https://www.youtube.com/embed/hAqxvClDTfc?si=WnXfPIblnnK7hv7J',
            backgroundColor: 'rgb(92, 61, 111)',
            useWhiteCloseBtn: true,
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      case 'Hoshee':
        this.dialog.open(GenericProjectShowcasePopupComponent, {
          data: {
            title: 'Project Title (Non-Video Type)',
            thumbnailAssetUrl: '/assets/landing-page/background.jpg',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            externalLink: 'https://www.youtube.com/watch?v=hAqxvClDTfc&ab_channel=AsterArcadia%E3%80%90NIJISANJIEN%E3%80%91',
            backgroundColor: 'rgb(105, 93, 207)',
            isSmScreen: this.screenWidth <= 1200 / .75,
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      case 'Rui':
        this.dialog.open(GenericProjectShowcasePopupComponent, {
          data: {
            title: 'Project Stellar',
            thumbnailAssetUrl: '/assets/projects-page/Rui_project_thumbnail.png',
            description: "It's been a long journey, and we don't regret it because we were able to be with you in this timeline. The stars truly have aligned and have fated us to meet you.",
            backgroundColor: 'rgb(105, 93, 207)',
            isSmScreen: this.screenWidth <= 1200 / .75,
            useExternalLinkOverlay: true,
            externalLink: 'https://projectstellar.carrd.co',
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      case 'Ascana':
        this.dialog.open(GenericProjectShowcasePopupComponent, {
          data: {
            title: 'Animal - DECO*27 (ft. Aster)',
            thumbnailAssetUrl: '/assets/projects-page/Ascana_project_thumbnail.png',
            description: "Animal Nyaster Ver.!",
            backgroundColor: 'rgb(92, 61, 111)',
            isSmScreen: this.screenWidth <= 1200 / .75,
            useWhiteCloseBtn: true,
            useExternalLinkOverlay: true,
            externalLink: 'https://www.youtube.com/watch?v=hAqxvClDTfc&ab_channel=AsterArcadia%E3%80%90NIJISANJIEN%E3%80%91',
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      case 'Lyn':
        this.dialog.open(GenericProjectShowcasePopupComponent, {
          data: {
            title: 'Custom Aster Arcadia Mouse Animated Mouse Cursors',
            thumbnailAssetUrl: '/assets/projects-page/Lyn_project_thumbnail.gif',
            description: "In celebration of Aster's Birthday, here are some Aster Animated Cursors for everyone to use and enjoy! These animated mouse cursors will surely brighten up your screen just like our Star Boy!",
            externalLink: 'https://drive.google.com/drive/folders/116S9llCqzXrDkQvz7bOJTCBxsExAeydb?usp=sharing',
            backgroundColor: 'rgb(147, 113, 221)',
            isSmScreen: this.screenWidth <= 1200 / .75,
            useWhiteCloseBtn: true,
          },
          minWidth: this.screenWidth <= 1200 / .75 ? '700px' : '1200px',
          autoFocus:false,
        });
        break;

      default:
        console.error('unknown project name', name);
    }
  }
}
