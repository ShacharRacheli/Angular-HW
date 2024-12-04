import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHWComponent } from './courses-hw.component';

describe('CoursesHWComponent', () => {
  let component: CoursesHWComponent;
  let fixture: ComponentFixture<CoursesHWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesHWComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursesHWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
