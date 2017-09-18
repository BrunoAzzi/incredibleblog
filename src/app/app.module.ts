import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { AppRoutingModule } from './app-rounting/app-rounting.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LeadFormComponent } from './components/dialogs/lead-form/lead-form.component';
import { LeadService } from './services/lead.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeadFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    LeadService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LeadFormComponent
]
})
export class AppModule { }
