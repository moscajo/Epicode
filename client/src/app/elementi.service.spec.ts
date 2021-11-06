import { TestBed } from '@angular/core/testing';

import { ElementiService } from './elementi.service';

describe('ElementiService', () => {
  let service: ElementiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
