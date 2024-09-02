import { Component, HostListener } from '@angular/core';
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

  private screenWidth!: number;
  private screenHeight!: number;

  constructor(
    private dialog: MatDialog,
  ) {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  showFanMessagePopup(bgImgPath: string, message: string, username: string) {
    this.dialog.open(StarMessagePopupComponent, {
      data: {
        imgPath: bgImgPath,
        message,
        username,
      },
      minWidth: this.screenWidth <= 1200 / .75 ? '1100px' : '1200px',
      height: this.screenHeight <= 700 / .85 ? '85%' : '700px',
      autoFocus: false,
    });
  }
}
