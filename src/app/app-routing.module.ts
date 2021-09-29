import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'article/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
