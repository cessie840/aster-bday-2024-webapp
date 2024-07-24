import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-stellar-video-popup',
  templateUrl: './project-stellar-video-popup.component.html',
  styleUrls: ['./project-stellar-video-popup.component.scss']
})
export class ProjectStellarVideoPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      videoSrc: string,
    }
  ) {

  }
}
