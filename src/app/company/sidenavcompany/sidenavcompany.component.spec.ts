import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcompanyComponent } from './sidenavcompany.component';

describe('SidenavcompanyComponent', () => {
  let component: SidenavcompanyComponent;
  let fixture: ComponentFixture<SidenavcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
