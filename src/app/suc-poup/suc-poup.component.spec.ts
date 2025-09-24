import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucPoupComponent } from './suc-poup.component';

describe('SucPoupComponent', () => {
  let component: SucPoupComponent;
  let fixture: ComponentFixture<SucPoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucPoupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucPoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
