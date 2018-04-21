import { TestBed, inject } from '@angular/core/testing';

import { EmailsValidatorService } from './emails-validator.service';

describe('EmailsValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsValidatorService]
    });
  });

  it('should be created', inject([EmailsValidatorService], (service: EmailsValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
