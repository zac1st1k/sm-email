import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { EmailRequest, EmailResponse } from '../models/email.model';

const RELATIVE_URL = '/email';

@Injectable()
export class EmailApiService {
  constructor(
    private http: HttpClient,
  ) { }

  public send(email: EmailRequest): Observable<EmailResponse> {
    return this.http.post<EmailResponse>(RELATIVE_URL, email);
  }
}
