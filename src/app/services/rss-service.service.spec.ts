import { TestBed, inject } from '@angular/core/testing';

import { RssServiceService } from './rss-service.service';

describe('RssServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RssServiceService]
    });
  });

  it('should be created', inject([RssServiceService], (service: RssServiceService) => {
    expect(service).toBeTruthy();
  }));
});
