import { TestBed } from '@angular/core/testing';

import { ComicImagesPreloaderService } from './comic-images-preloader.service';

describe('ComicImagesPreloaderService', () => {
  let service: ComicImagesPreloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicImagesPreloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
