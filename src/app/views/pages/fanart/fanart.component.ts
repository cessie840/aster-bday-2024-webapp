import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FAN_ART_IMAGES, FanArtDetails } from 'src/app/data/FanArt';
import { FanartPopupComponent } from '../../popups/fanart-popup/fanart-popup.component';

@Component({
  selector: 'app-fanart',
  templateUrl: './fanart.component.html',
  styleUrls: ['./fanart.component.scss']
})
export class FanartComponent {
  artworks = FAN_ART_IMAGES;

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

  getSmallSrcPath(srcPath: string): string {
    const split = srcPath.split('/');
    const filename = split.pop();
    split.push('sm');
    split.push(filename!);

    return `${split.join('/')}`
  }

  getGridRowStyle(fanartDetails: FanArtDetails): any {
    const result: any = {};

    if (fanartDetails.rowSpan) {
      result['grid-row'] = `auto / span ${fanartDetails.rowSpan}`;
    };

    if (fanartDetails.colSpan) {
      result['grid-column'] = `auto / span ${fanartDetails.colSpan}`;
    }

    return result;
  }

  openArtworkPopup(details: FanArtDetails) {
    this.dialog.open(FanartPopupComponent, {
      data: {
        details,
      },
      autoFocus: false,
      width: this.screenWidth <= 1200 / .75 ? '30vw' : undefined,
      minWidth: this.screenWidth <= 1200 / .75 ? undefined: '35vw',
    });
  }
}
