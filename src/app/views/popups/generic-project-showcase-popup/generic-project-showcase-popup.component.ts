import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-generic-project-showcase-popup',
  templateUrl: './generic-project-showcase-popup.component.html',
  styleUrl: './generic-project-showcase-popup.component.scss'
})
export class GenericProjectShowcasePopupComponent {
  externalLink: SafeResourceUrl | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      thumbnailAssetUrl: string,
      description: string,
      externalLink?: string,
      backgroundColor?: string,
      isSmScreen: boolean,
      useWhiteCloseBtn?: boolean,
    },
    private domSanitizer: DomSanitizer,
  ) {
    if (data.externalLink) {
      this.externalLink = this.domSanitizer.bypassSecurityTrustResourceUrl(data.externalLink);
    }
  }
}
