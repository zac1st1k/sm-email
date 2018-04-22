import 'rxjs/add/operator/finally';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailRequest, EmailResponse } from '../models/email.model';
import { EmailApiService } from '../services/email-api.service';
import { validateEmails } from '../services/emails-validator.service';

interface EmailFormGroup extends FormGroup {
  controls: {
    to: FormControl;
    cc: FormControl;
    bcc: FormControl;
    subject: FormControl;
    body: FormControl;
  };
}

interface EmailFormModel {
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
}

@Component({
  selector: 'sm-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailFormGroup: EmailFormGroup;
  isSending: boolean;
  isErrorShown: boolean;
  isSent: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private emailApiService: EmailApiService,
  ) { }

  ngOnInit() {
    this.emailFormGroup = this.initEmailForm() as EmailFormGroup;
  }

  submit(): void {
    this.cleanMessages();
    const request = this.emailFormGroup.value as EmailRequest;
    this.emailApiService
      .send(request)
      .subscribe(
        (response: EmailResponse) => {
          this.handleMockResponse('success');
        },
        (error: HttpErrorResponse) => {
          this.handleMockResponse('error', error.message);
        });
  }

  private initEmailForm(): FormGroup {
    return this.formBuilder.group({
      to: [
        '',
        Validators.compose([
          Validators.required,
          validateEmails,
        ]),
      ],
      cc: [
        '',
        Validators.compose([
          validateEmails,
        ]),
      ],
      bcc: [
        '',
        Validators.compose([
          validateEmails,
        ]),
      ],
      subject: [
        '',
        Validators.compose([
          Validators.maxLength(78),
        ]),
      ],
      body: [
        '',
        Validators.compose([
          Validators.maxLength(1000),
        ]),
      ],
    });
  }

  private cleanMessages() {
    this.isSending = true;
    this.isSent = false;
    this.isErrorShown = false;
  }

  // mocking server response always return success
  private handleMockResponse(state: 'success' | 'error', message?: string) {
    if (state === 'success') {
      this.isErrorShown = false;
      this.isSending = false;
      this.isSent = true;
    } else {
      setTimeout(() => {
        this.isSending = false;
        this.isSent = true;
        this.isErrorShown = false;
      }, 2000);
    }
  }
}
