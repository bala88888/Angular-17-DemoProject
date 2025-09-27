import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuiltipalQutionComponent } from './muiltipal-qution.component';

describe('MuiltipalQutionComponent', () => {
  let component: MuiltipalQutionComponent;
  let fixture: ComponentFixture<MuiltipalQutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuiltipalQutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuiltipalQutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
