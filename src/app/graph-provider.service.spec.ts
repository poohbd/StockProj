import { TestBed } from '@angular/core/testing';

import { GraphProviderService } from './graph-provider.service';

describe('GraphProviderService', () => {
  let service: GraphProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
