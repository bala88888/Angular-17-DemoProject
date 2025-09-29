import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangecheckComponent } from './changecheck.component';

describe('ChangecheckComponent', () => {
  let component: ChangecheckComponent;
  let fixture: ComponentFixture<ChangecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangecheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
