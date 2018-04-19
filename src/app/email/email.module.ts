import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiEmailInputComponent } from './multi-email-input/multi-email-input.component';
import { EmailFormComponent } from './email-form/email-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiEmailInputComponent, EmailFormComponent]
})
export class EmailModule { }
