import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { STAR_MESSAGES } from 'src/app/data/StarMessages';
import { StarMessageProps } from 'src/app/models/StarMessage';
import { StarMessagePopupComponent } from '../../popups/star-message-popup/star-message-popup.component';
import { CookieService } from 'ngx-cookie';

const COOKIE_CLICKED_MESSAGES_NAMES_LIST = 'ab-cmnl';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
  messages: readonly StarMessageProps[] = STAR_MESSAGES;

  private screenWidth!: number;
  private screenHeight!: number;

  private clickedMessagesNames!: Set<string>;

  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService,
  ) {
    this.onResize();

    const clickedMsgs = this.cookieService.get(COOKIE_CLICKED_MESSAGES_NAMES_LIST);
    console.log(clickedMsgs);
    this.clickedMessagesNames = clickedMsgs ? new Set<string>(JSON.parse(clickedMsgs)) : new Set<string>();
  }

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  isClicked(msg: StarMessageProps): boolean {
    return this.clickedMessagesNames.has(msg.username);
  }

  getStyle(idx: number, msgStyle: Object): Object {
    return {
      ...msgStyle,
      '--size-factor': `${1.7 + idx / 100 * 4}`,
    };
  }

  showFanMessagePopup(bgImgPath: string, message: string, username: string) {
    if (!this.clickedMessagesNames.has(username)) {
      this.clickedMessagesNames.add(username);
      this.cookieService.put(COOKIE_CLICKED_MESSAGES_NAMES_LIST, JSON.stringify([...this.clickedMessagesNames]));
    }

    this.dialog.open(StarMessagePopupComponent, {
      data: {
        imgPath: bgImgPath,
        message,
        username,
      },
      minWidth: this.screenWidth <= 1200 / .75 ? '1000px' : '1200px',
      height: this.screenHeight <= 700 / .85 ? '80%' : '700px',
      autoFocus: false,
    });
  }
}
