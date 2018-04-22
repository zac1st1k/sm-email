import { TestBed, inject } from '@angular/core/testing';

import { validateEmails } from './emails-validator.service';

describe('EmailsValidatorService', () => {

  xit('should be created', () => {
    expect(validateEmails({} as any)).toBeTruthy();
  });
});
