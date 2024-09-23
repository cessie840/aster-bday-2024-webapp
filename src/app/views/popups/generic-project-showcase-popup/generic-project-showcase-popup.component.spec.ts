import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericProjectShowcasePopupComponent } from './generic-project-showcase-popup.component';

describe('GenericProjectShowcasePopupComponent', () => {
  let component: GenericProjectShowcasePopupComponent;
  let fixture: ComponentFixture<GenericProjectShowcasePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericProjectShowcasePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericProjectShowcasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
