import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstellarComponent } from './projectstellar.component';

describe('ProjectstellarComponent', () => {
  let component: ProjectstellarComponent;
  let fixture: ComponentFixture<ProjectstellarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectstellarComponent]
    });
    fixture = TestBed.createComponent(ProjectstellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
