import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StarMessagePopupComponent } from '../../popups/star-message-popup/star-message-popup.component';
import { STAR_MESSAGES } from 'src/app/data/StarMessages';
import { StarMessageProps } from 'src/app/models/StarMessage';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

  readonly starMessages = STAR_MESSAGES;

  constructor(
    private dialog: MatDialog,
  ) {

  }

  show(starMsg: StarMessageProps) {
    this.dialog.open(StarMessagePopupComponent, {
      data: {imgPath: starMsg.imgPath},
      width: '900px',
      height: '90%',
      autoFocus: false,
    });
  }
}
