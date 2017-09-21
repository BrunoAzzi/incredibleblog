import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageLayoutComponent } from '../components/layouts/landing-page-layout/landing-page-layout.component';
import { BlogComponent } from '../views/blog/blog.component';
import { PostLayoutComponent } from '../components/layouts/post-layout/post-layout.component';
import { PostFormComponent } from '../views/post-form/post-form.component';
import { PostListComponent } from '../views/post-list/post-list.component';
import { ThanksPageComponent } from '../views/thanks-page/thanks-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'blog', pathMatch: 'full'
  },
  {
    path: '', component: LandingPageLayoutComponent, children: [
      {
        path: 'thanks-page', component: ThanksPageComponent
      },
      {
        path: 'blog', component: BlogComponent
      },
      {
        path: 'blog/make/post-list', component: PostListComponent
      },
      {
        path: 'blog/make/post', component: PostFormComponent
      },
      {
        path: 'post/:post-title', component: PostLayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
