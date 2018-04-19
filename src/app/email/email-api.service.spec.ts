import { TestBed, inject } from '@angular/core/testing';

import { EmailApiService } from './email-api.service';

describe('EmailApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailApiService]
    });
  });

  it('should be created', inject([EmailApiService], (service: EmailApiService) => {
    expect(service).toBeTruthy();
  }));
});
