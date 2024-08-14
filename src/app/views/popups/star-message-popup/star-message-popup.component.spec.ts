import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMessagePopupComponent } from './star-message-popup.component';

describe('StarMessagePopupComponent', () => {
  let component: StarMessagePopupComponent;
  let fixture: ComponentFixture<StarMessagePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarMessagePopupComponent]
    });
    fixture = TestBed.createComponent(StarMessagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
