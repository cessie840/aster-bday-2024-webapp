import { Injectable } from '@angular/core';
import { JESS_COMIC_PROJECT_IMAGES } from '../data/ComicImages';

@Injectable({
  providedIn: 'root'
})
export class ComicImagesPreloaderService {

  private comicImages: HTMLImageElement[] = [];

  constructor() { }

  preloadComic() {
    if (this.comicImages.length !== 0) {
      return;
    }

    // only 1 known comic: Jess's project
    for (let imageDetails of JESS_COMIC_PROJECT_IMAGES) {
      const img = new Image();
      img.src = imageDetails.srcPath;
      this.comicImages.push(img);
    }
  }
}
