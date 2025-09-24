import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailpoupComponent } from './failpoup.component';

describe('FailpoupComponent', () => {
  let component: FailpoupComponent;
  let fixture: ComponentFixture<FailpoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailpoupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FailpoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
