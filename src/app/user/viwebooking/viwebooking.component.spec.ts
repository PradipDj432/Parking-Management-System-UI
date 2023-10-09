import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwebookingComponent } from './viwebooking.component';

describe('ViwebookingComponent', () => {
  let component: ViwebookingComponent;
  let fixture: ComponentFixture<ViwebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwebookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
