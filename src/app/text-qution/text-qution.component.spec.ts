import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQutionComponent } from './text-qution.component';

describe('TextQutionComponent', () => {
  let component: TextQutionComponent;
  let fixture: ComponentFixture<TextQutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextQutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextQutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
