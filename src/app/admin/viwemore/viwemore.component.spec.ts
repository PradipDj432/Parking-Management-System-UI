import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwemoreComponent } from './viwemore.component';

describe('ViwemoreComponent', () => {
  let component: ViwemoreComponent;
  let fixture: ComponentFixture<ViwemoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViwemoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViwemoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
