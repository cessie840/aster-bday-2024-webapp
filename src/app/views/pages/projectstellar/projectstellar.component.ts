import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectStellarVideoPopupComponent } from '../../popups/project-stellar-video-popup/project-stellar-video-popup.component';

@Component({
  selector: 'app-projectstellar',
  templateUrl: './projectstellar.component.html',
  styleUrls: ['./projectstellar.component.scss']
})
export class ProjectstellarComponent {
  constructor(
    private dialog: MatDialog,
  ) {

  }

  showProject(num: number) {
    const testDesc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

    switch (num) {
      case 1: this.dialog.open(ProjectStellarVideoPopupComponent, {autoFocus: false, width: '1200px', data: {title: 'Zoocadia', description: testDesc, videoSrc: 'https://www.youtube.com/embed/oIXrcBLsZjg?si=OiEChHUru-35xqpv'}}); break;
      case 2: this.dialog.open(ProjectStellarVideoPopupComponent, {autoFocus: false, width: '1200px', data: {title: 'VTL Arcadians Cover', description: testDesc, videoSrc: 'https://www.youtube.com/embed/oIXrcBLsZjg?si=OiEChHUru-35xqpv'}}); break;
      case 3: this.dialog.open(ProjectStellarVideoPopupComponent, {autoFocus: false, width: '1200px', data: {title: 'Asta Pape Around the World', description: testDesc, videoSrc: 'https://www.youtube.com/embed/oIXrcBLsZjg?si=OiEChHUru-35xqpv'}}); break;
      case 4: this.dialog.open(ProjectStellarVideoPopupComponent, {autoFocus: false, width: '1200px', data: {title: 'Jess project', description: testDesc, videoSrc: 'https://www.youtube.com/embed/oIXrcBLsZjg?si=OiEChHUru-35xqpv'}}); break;
    }
  }
}
