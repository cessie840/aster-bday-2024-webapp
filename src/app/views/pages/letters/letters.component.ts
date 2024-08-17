import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { STAR_MESSAGES } from 'src/app/data/StarMessages';
import { StarMessageProps } from 'src/app/models/StarMessage';
import { StarMessagePopupComponent } from '../../popups/star-message-popup/star-message-popup.component';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
  messages: readonly StarMessageProps[] = STAR_MESSAGES;

  constructor(
    private dialog: MatDialog,
  ) {

  }

  showFanMessagePopup(bgImgPath: string, message: string, username: string) {
    this.dialog.open(StarMessagePopupComponent, {
      data: {
        imgPath: bgImgPath,
        message,
        username,
      },
      minWidth: '1200px',
      height: '700px',
    })
  }
}
