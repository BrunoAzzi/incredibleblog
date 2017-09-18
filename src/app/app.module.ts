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
import { LandingPageLayoutComponent } from './components/layouts/landing-page-layout/landing-page-layout.component';
import { BlogLayoutComponent } from './components/layouts/blog-layout/blog-layout.component';
import { BlogComponent } from './views/blog/blog.component';
import { PostLayoutComponent } from './components/layouts/post-layout/post-layout.component';
import { CallToActionComponent } from './components/reusable/call-to-action/call-to-action.component';
import { IpService } from './services/ip.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeadFormComponent,
    LandingPageLayoutComponent,
    BlogLayoutComponent,
    BlogComponent,
    PostLayoutComponent,
    CallToActionComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    LeadService,
    IpService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LeadFormComponent
]
})
export class AppModule { }
