import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanartComponent } from './fanart.component';

describe('FanartComponent', () => {
  let component: FanartComponent;
  let fixture: ComponentFixture<FanartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FanartComponent]
    });
    fixture = TestBed.createComponent(FanartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
