import { Component, Inject, numberAttribute } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

const MAX_IMAGES_SHOWN = 2;

@Component({
  selector: 'app-comic-project-showcase-popup',
  templateUrl: './comic-project-showcase-popup.component.html',
  styleUrl: './comic-project-showcase-popup.component.scss'
})
export class ComicProjectShowcasePopupComponent {

  readonly PLACEHOLDER_IMG_VALUE = 'placeholder';

  disableLeftBtn = true;
  disableRightBtn = true;

  idx = 0;

  imagesToShow: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      imgs: readonly string[],
    },
  ) {
    if (data.imgs.length > MAX_IMAGES_SHOWN) {
      this.disableRightBtn = false;
    }
    this.computeImagesToShow();
  }

  private computeImagesToShow() {
    const newImagesToShow = [];
    for (let i = this.idx; i < this.idx + MAX_IMAGES_SHOWN; i++) {
      if (i < this.data.imgs.length) {
        newImagesToShow.push(this.data.imgs[i]);
      } else {
        newImagesToShow.push(this.PLACEHOLDER_IMG_VALUE);
      }
    }
    this.imagesToShow = newImagesToShow;
  }

  navigateLeft() {
    this.idx -= MAX_IMAGES_SHOWN;

    if (this.idx === 0) {
      this.disableLeftBtn = true;
    }
    this.disableRightBtn = false;

    this.computeImagesToShow();
  }

  navigateRight() {
    this.idx += MAX_IMAGES_SHOWN;

    if (this.idx + MAX_IMAGES_SHOWN >= this.data.imgs.length) {
      this.disableRightBtn = true;
    }
    this.disableLeftBtn = false;

    this.computeImagesToShow();
  }
}
