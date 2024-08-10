import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  pageThumbnailDetails: readonly {
    title: string,
    thumbnailUrl: string,
    navigateToPath: string,
  }[];

  constructor(
    private router: Router,
  ) {
    this.pageThumbnailDetails = [
      {
        title: 'Projects',
        thumbnailUrl: '/assets/landing-page/projects-thumbnail.jpg',
        navigateToPath: 'fanart', // TODO: navigate to projects page
      },
      {
        title: 'Fan letters',
        thumbnailUrl: '/assets/landing-page/fan-messages-thumbnail.jpg',
        navigateToPath: 'letters',
      },
      {
        title: 'Fan art',
        thumbnailUrl: '/assets/landing-page/fan-art-thumbnail.jpg',
        navigateToPath: 'fanart',
      },
      {
        title: 'Credits',
        thumbnailUrl: '/assets/landing-page/credits-thumbnail.jpg',
        navigateToPath: 'credits',
      },
    ];
  }

  navigateToPage(path: string) {
    this.router.navigateByUrl(path);
  }
}
