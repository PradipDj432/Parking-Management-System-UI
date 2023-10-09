import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcompanyComponent } from './dashboardcompany.component';

describe('DashboardcompanyComponent', () => {
  let component: DashboardcompanyComponent;
  let fixture: ComponentFixture<DashboardcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
