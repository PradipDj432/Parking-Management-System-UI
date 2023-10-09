import { TestBed } from '@angular/core/testing';

import { WatchmanservicesService } from './watchmanservices.service';

describe('WatchmanservicesService', () => {
  let service: WatchmanservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchmanservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
