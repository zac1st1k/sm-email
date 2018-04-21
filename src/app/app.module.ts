import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmailModule } from './email/email.module';
import { ROUTES } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    EmailModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
