import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchvehicleComponent } from './searchvehicle.component';

describe('SearchvehicleComponent', () => {
  let component: SearchvehicleComponent;
  let fixture: ComponentFixture<SearchvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
