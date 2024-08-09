import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiiComponent } from './aii.component';

describe('AiiComponent', () => {
  let component: AiiComponent;
  let fixture: ComponentFixture<AiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
