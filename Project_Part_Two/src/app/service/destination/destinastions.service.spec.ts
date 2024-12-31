import { TestBed } from '@angular/core/testing';

import { DestinastionsService } from './destinastions.service';

describe('DestinastionsService', () => {
  let service: DestinastionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinastionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
