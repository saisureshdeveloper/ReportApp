import { TestBed } from '@angular/core/testing';

import { ExortFileService } from './export-file.service';

describe('ExortFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExortFileService = TestBed.get(ExortFileService);
    expect(service).toBeTruthy();
  });
});
