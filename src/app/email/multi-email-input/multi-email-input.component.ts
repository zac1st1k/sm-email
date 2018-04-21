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
  // @Output() onUpdate = new EventEmitter<any>();

  emails: string[] = [];

  onChange = (email: string[]) => { };

  onTouched = () => { };

  get value(): string[] {
    return this.emails;
  }

  enterEmail(event: any) {
    const email = event.target.value;
    this.emails;
    const result = this.emails.concat([email]);
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