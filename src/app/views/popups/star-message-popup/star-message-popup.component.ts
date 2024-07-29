import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-star-message-popup',
  templateUrl: './star-message-popup.component.html',
  styleUrls: ['./star-message-popup.component.scss']
})
export class StarMessagePopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { imgPath: string, text: string, username: string },
  ) {

  }

  getBgImg(): string {
    return `url(${this.data.imgPath})`;
  }
}
