import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavComponent1 } from './sidenav.component';

describe('SidenavComponent', () => {
  let component: SidenavComponent1;
  let fixture: ComponentFixture<SidenavComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavComponent1 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
