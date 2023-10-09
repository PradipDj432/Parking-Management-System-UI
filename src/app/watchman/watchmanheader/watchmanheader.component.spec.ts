import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchmanheaderComponent } from './watchmanheader.component';

describe('WatchmanheaderComponent', () => {
  let component: WatchmanheaderComponent;
  let fixture: ComponentFixture<WatchmanheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchmanheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchmanheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
