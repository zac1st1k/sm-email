import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { EmailApiService } from './email-api.service';

const email = {
  from: ['from@mail.com'],
  to: ['to@mail.com'],
  cc: ['cc@mail.com'],
  bcc: ['bcc@mail.com'],
  subject: 'subject',
  body: 'body',
};

describe('EmailApiService', () => {
  let emailApiService: EmailApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        EmailApiService,
      ],
    });

    emailApiService = TestBed.get(EmailApiService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should send email', () => {
    emailApiService.send(email).subscribe(res => {
      expect(res).toEqual(email);
    });

    httpTestingController
      .expectOne({
        method: 'GET',
        url: 'test',
      })
      .flush({ email });
  });
});
