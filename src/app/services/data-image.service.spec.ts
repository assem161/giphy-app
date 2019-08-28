import { TestBed } from '@angular/core/testing';

import { DataImageService } from './data-image.service';

describe('DataImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataImageService = TestBed.get(DataImageService);
    expect(service).toBeTruthy();
  });
});
