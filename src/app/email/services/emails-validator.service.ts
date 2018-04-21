import { FormControl } from '@angular/forms';

export const EMAIL_RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*;?$/;

export function validateEmails(control: FormControl) {
  if (control.value && control.value.length && control.value[0] !== '') {
    return control.value.every(email =>
      EMAIL_RE.test(email)
    ) ? null : {
        emailsValid: false
      };
  } else {
    return null;
  }
}