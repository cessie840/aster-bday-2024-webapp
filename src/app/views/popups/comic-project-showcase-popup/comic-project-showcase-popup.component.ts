import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComicPageData } from 'src/app/data/ComicImages';

const MAX_IMAGES_SHOWN = 1;

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

  imagesToShow: ComicPageData[] = [];

  isSmallScreen = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      imgs: readonly ComicPageData[],
      isSmallScreen: boolean,
      backgroundColor?: string,
    },
  ) {
    if (data.imgs.length > MAX_IMAGES_SHOWN) {
      this.disableRightBtn = false;
    }
    this.computeImagesToShow();

    if (data.isSmallScreen) {
      this.isSmallScreen = true;
    }
  }

  private computeImagesToShow() {
    const newImagesToShow: ComicPageData[] = [];
    for (let i = this.idx; i < this.idx + MAX_IMAGES_SHOWN; i++) {
      if (i < this.data.imgs.length) {
        newImagesToShow.push(this.data.imgs[i]);
      } else {
        newImagesToShow.push({ srcPath: this.PLACEHOLDER_IMG_VALUE });
      }
    }
    this.imagesToShow = newImagesToShow;
  }

  getDisplayOf(pageData: ComicPageData): string {
    if (pageData.chapter == undefined && pageData.page == undefined) {
      return '(0)'; // must be cover of the comic
    }

    return `(${pageData.chapter}-${pageData.page})`;
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
