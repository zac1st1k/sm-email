import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailApiService } from '../services/email-api.service';
import { EmailResponse, EmailRequest } from '../models/email.model';

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

const EMAIL_REGULAR_EXPRESSION = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*;?$/

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailFormGroup: EmailFormGroup;
  isSending: boolean;
  isErrorShown: boolean;
  errorMessage: string;

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
        {
          value: 'zacfirst@gmail.com',
          disabled: true
        },
        Validators.compose([
          Validators.required
        ]),
      ],
      to: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(EMAIL_REGULAR_EXPRESSION),
        ]),
      ],
      cc: [
        '',
        Validators.compose([
          Validators.pattern(EMAIL_REGULAR_EXPRESSION),
        ]),
      ],
      bcc: [
        '',
        Validators.compose([
          Validators.pattern(EMAIL_REGULAR_EXPRESSION),
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
