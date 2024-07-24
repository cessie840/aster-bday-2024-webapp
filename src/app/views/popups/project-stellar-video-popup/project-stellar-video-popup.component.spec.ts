import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStellarVideoPopupComponent } from './project-stellar-video-popup.component';

describe('ProjectStellarVideoPopupComponent', () => {
  let component: ProjectStellarVideoPopupComponent;
  let fixture: ComponentFixture<ProjectStellarVideoPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectStellarVideoPopupComponent]
    });
    fixture = TestBed.createComponent(ProjectStellarVideoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
