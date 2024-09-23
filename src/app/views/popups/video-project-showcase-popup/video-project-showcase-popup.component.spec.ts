import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProjectShowcasePopupComponent } from './video-project-showcase-popup.component';

describe('VideoProjectShowcasePopupComponent', () => {
  let component: VideoProjectShowcasePopupComponent;
  let fixture: ComponentFixture<VideoProjectShowcasePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoProjectShowcasePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoProjectShowcasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
