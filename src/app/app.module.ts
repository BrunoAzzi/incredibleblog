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
import { LeadService } from './services/lead.service';
import { LandingPageLayoutComponent } from './components/layouts/landing-page-layout/landing-page-layout.component';
import { BlogComponent } from './views/blog/blog.component';
import { PostLayoutComponent } from './components/layouts/post-layout/post-layout.component';
import { IpService } from './services/ip.service';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TopnavbarComponent } from './components/layouts/topnavbar/topnavbar.component';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { PostService } from './services/post.service';
import { PostFormComponent } from './views/post-form/post-form.component';
import { PostListComponent } from './views/post-list/post-list.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { Angulartics2GoogleAnalytics, Angulartics2Module } from 'angulartics2';
import { FacebookModule } from 'ngx-facebook';
import { EbookDownloadComponent } from './components/reusable/ebook-download/ebook-download.component';
import { ThanksPageComponent } from './views/thanks-page/thanks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageLayoutComponent,
    BlogComponent,
    PostLayoutComponent,
    TopnavbarComponent,
    PostFormComponent,
    PostListComponent,
    EbookDownloadComponent,
    ThanksPageComponent,
  ],
  imports: [
    FormsModule,
    JsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FacebookModule.forRoot(),
    CKEditorModule,
    MarkdownToHtmlModule.forRoot(),
  ],
  providers: [
    LeadService,
    PostService,
    IpService,
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
