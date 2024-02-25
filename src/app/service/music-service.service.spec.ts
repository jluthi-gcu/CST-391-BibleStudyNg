import { TestBed } from '@angular/core/testing';

import { BibleStudyServiceService } from './music-service.service';

describe('BibleStudyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibleStudyServiceService = TestBed.get(BibleStudyServiceService);
    expect(service).toBeTruthy();
  });
});
