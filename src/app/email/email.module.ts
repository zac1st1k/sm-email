import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailRoutingModule } from './email-routing.module';
import { MultiEmailInputComponent } from './multi-email-input/multi-email-input.component';
import { EmailApiService } from './services/email-api.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmailRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    MultiEmailInputComponent,
    EmailFormComponent
  ],
  providers: [
    EmailApiService
  ]
})
export class EmailModule { }
