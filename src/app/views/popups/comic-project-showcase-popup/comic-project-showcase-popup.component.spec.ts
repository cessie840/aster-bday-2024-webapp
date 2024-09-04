import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicProjectShowcasePopupComponent } from './comic-project-showcase-popup.component';

describe('ComicProjectShowcasePopupComponent', () => {
  let component: ComicProjectShowcasePopupComponent;
  let fixture: ComponentFixture<ComicProjectShowcasePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicProjectShowcasePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicProjectShowcasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
