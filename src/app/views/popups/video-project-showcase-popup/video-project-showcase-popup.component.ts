import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-project-showcase-popup',
  templateUrl: './video-project-showcase-popup.component.html',
  styleUrl: './video-project-showcase-popup.component.scss',
})
export class VideoProjectShowcasePopupComponent {
  videoSrc!: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      videoLink: string,
      backgroundColor?: string,
      useWhiteCloseBtn?: boolean,
    },
    private domSanitizer: DomSanitizer,
  ) {
    this.videoSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(data.videoLink)
  }
}
