import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEventComponent } from './api-event.component';

describe('ApiEventComponent', () => {
  let component: ApiEventComponent;
  let fixture: ComponentFixture<ApiEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
