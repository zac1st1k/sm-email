import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiEmailInputComponent } from './multi-email-input/multi-email-input.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailRoutingModule } from './email-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule,
  ],
  declarations: [MultiEmailInputComponent, EmailFormComponent]
})
export class EmailModule { }
