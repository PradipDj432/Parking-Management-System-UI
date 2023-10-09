import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilecompanyComponent } from './editprofilecompany.component';

describe('EditprofilecompanyComponent', () => {
  let component: EditprofilecompanyComponent;
  let fixture: ComponentFixture<EditprofilecompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofilecompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofilecompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
