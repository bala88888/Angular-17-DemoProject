import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdwonComponent } from './dropdwon.component';

describe('DropdwonComponent', () => {
  let component: DropdwonComponent;
  let fixture: ComponentFixture<DropdwonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdwonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdwonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
