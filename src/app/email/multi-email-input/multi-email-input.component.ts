import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'sm-multi-email-input',
  templateUrl: './multi-email-input.component.html',
  styleUrls: ['./multi-email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiEmailInputComponent),
      multi: true
    }
  ]
})
export class MultiEmailInputComponent implements ControlValueAccessor {
  @Input() id: string;
  email: string;
  emails: string[] = [];
  emailList: string[] = [];
  search = (text$: Observable<string>) =>
    text$
      .distinctUntilChanged()
      .map(term =>
        this.emailList
          .filter(v =>
            v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));


  onChange = (email: string[]) => { };

  onTouched = () => { };

  get value(): string[] {
    return this.emails;
  }

  typeEmail(event: any) {
    this.email = event.target.value;
    let emailsOld = this.emails.slice(0);

    if (this.email.indexOf(';') > -1) {
      this.email = this.email.slice(0, -1);
      this.emails.push(this.email);
      this.emailList.push(this.email);
      this.email = '';
      event.target.value = '';
    }

    const result = emailsOld.concat([this.email]);
    this.writeValue(result);
  }

  removeEmail(index: number) {
    this.emails.splice(index, 1);
    const result = this.emails.concat([this.email]);
    this.writeValue(result);
  }

  writeValue(emails: string[]): void {
    this.onChange(emails)
  }

  registerOnChange(fn: (email: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}