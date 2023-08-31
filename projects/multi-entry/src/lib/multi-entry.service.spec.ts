import { TestBed } from '@angular/core/testing';

import { MultiEntryService } from './multi-entry.service';

describe('MultiEntryService', () => {
  let service: MultiEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
