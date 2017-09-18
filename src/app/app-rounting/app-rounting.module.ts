import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../views/landing-page/landing-page.component';
import { LandingPageLayoutComponent } from '../components/layouts/landing-page-layout/landing-page-layout.component';
import { BlogLayoutComponent } from '../components/layouts/blog-layout/blog-layout.component';
import { BlogComponent } from '../views/blog/blog.component';
import { PostLayoutComponent } from '../components/layouts/post-layout/post-layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'landing-page', pathMatch: 'full'
  },
  {
    path: '', component: LandingPageLayoutComponent, children: [
      {
        path: 'landing-page', component: LandingPageComponent
      }
    ]
  },
  {
    path: '', component: BlogLayoutComponent, children: [
      {
          path: 'blog', component: BlogComponent
      },
      {
        path: 'post/{postname}', component: PostLayoutComponent
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
