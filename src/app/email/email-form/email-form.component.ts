import 'rxjs/add/operator/finally';

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EmailRequest, EmailResponse } from '../models/email.model';
import { EmailApiService } from '../services/email-api.service';
import { validateEmails } from '../services/emails-validator.service';

interface EmailFormGroup extends FormGroup {
  controls: {
    from: FormControl;
    to: FormControl;
    cc: FormControl;
    bcc: FormControl;
    subject: FormControl;
    body: FormControl;
  };
}

interface EmailFormModel {
  from: string[];
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  body: string;
}

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'sm-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailFormGroup: EmailFormGroup;
  isSending: boolean;
  isErrorShown: boolean;
  errorMessage: string;
  isSent: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private emailApiService: EmailApiService,
  ) { }

  ngOnInit() {
    this.emailFormGroup = this.initEmailForm() as EmailFormGroup;
  }

  submit(): void {
    this.isSending = true;
    const request = this.emailFormGroup.value as EmailRequest;
    this.emailApiService
      .send(request)
      .finally(() => (this.isSending = false))
      .subscribe(
        (response: EmailResponse) => {
          this.isErrorShown = false;
        },
        (error: HttpErrorResponse) => {
          this.isErrorShown = true;
          this.errorMessage = error.message;
        },
    );
  }

  private initEmailForm(): FormGroup {
    return this.formBuilder.group({
      from: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(EMAIL_RE),
        ]),
      ],
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
}
