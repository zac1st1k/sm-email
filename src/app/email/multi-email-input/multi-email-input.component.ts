import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() isRequired: boolean;

  emails: string[] = [];

  onChange = (email: string[]) => { };

  onTouched = () => { };

  get value(): string[] {
    return this.emails;
  }

  typeEmail(event: any) {
    let email = event.target.value;

    if (email.indexOf(';') > -1) {
      email = email.slice(0, -1);
      this.emails.push(email);
      event.target.value = '';
    }

    this.emails;
    const result = this.emails.concat([email]);
    this.writeValue(result);
  }

  removeEmail(index: number) {
    this.emails.splice(index, 1);
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