import { TestBed } from '@angular/core/testing';

import { MemoryCardsService } from './memory-cards.service';

describe('MemoryCardsService', () => {
  let service: MemoryCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
