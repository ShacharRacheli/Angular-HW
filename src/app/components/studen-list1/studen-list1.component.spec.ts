import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenList1Component } from './studen-list1.component';

describe('StudenList1Component', () => {
  let component: StudenList1Component;
  let fixture: ComponentFixture<StudenList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudenList1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudenList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
