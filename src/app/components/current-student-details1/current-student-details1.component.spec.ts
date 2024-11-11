import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStudentDetails1Component } from './current-student-details1.component';

describe('CurrentStudentDetails1Component', () => {
  let component: CurrentStudentDetails1Component;
  let fixture: ComponentFixture<CurrentStudentDetails1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentStudentDetails1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentStudentDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
