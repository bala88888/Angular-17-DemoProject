import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildofchangecheckComponent } from './childofchangecheck.component';

describe('ChildofchangecheckComponent', () => {
  let component: ChildofchangecheckComponent;
  let fixture: ComponentFixture<ChildofchangecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildofchangecheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildofchangecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
