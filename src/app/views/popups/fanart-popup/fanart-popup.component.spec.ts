import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanartPopupComponent } from './fanart-popup.component';

describe('FanartPopupComponent', () => {
  let component: FanartPopupComponent;
  let fixture: ComponentFixture<FanartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanartPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
