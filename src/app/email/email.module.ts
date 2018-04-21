import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailRoutingModule } from './email-routing.module';
import { MultiEmailInputComponent } from './multi-email-input/multi-email-input.component';
import { EmailApiService } from './services/email-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    EmailRoutingModule,
  ],
  declarations: [
    MultiEmailInputComponent,
    EmailFormComponent,
  ],
  providers: [
    EmailApiService
  ]
})
export class EmailModule { }
