import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiEmailInputComponent } from './multi-email-input/multi-email-input.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailRoutingModule } from './email-routing.module';
import { EmailApiService } from './services/email-api.service';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule,
    HttpClientModule,
  ],
  declarations: [MultiEmailInputComponent, EmailFormComponent]
  providers: [
    EmailApiService
  ]
})
export class EmailModule { }
