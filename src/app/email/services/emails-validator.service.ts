// import { ValidatorFn } from '@angular/forms';
// import { AbstractControl } from '@angular/forms';


// export function EmailsValidator(lastEmail: boolean): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const emails = control.value
//     emails.forEach(() =>{

//     });
//     return control.value && lastEmail ? { 'lastEmail': { value: true } } : null;
//   };
// }

import { FormControl } from '@angular/forms';

const EMAIL_REGULAR_EXPRESSION = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*;?$/;

export function validateEmails(control: FormControl) {
  if (control.value) {
    return control.value.every(email =>
      EMAIL_REGULAR_EXPRESSION.test(email)
    ) ? null : {
        emailsValid: false
      };
  } else {
    return null;
  }
}