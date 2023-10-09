import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercompanyComponent } from './headercompany.component';

describe('HeadercompanyComponent', () => {
  let component: HeadercompanyComponent;
  let fixture: ComponentFixture<HeadercompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
