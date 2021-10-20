import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { ArticleComponent } from './article/article.component';
import { CategoryFormComponent } from './admin/category/category-form/category-form.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StatusFormComponent } from './admin/status/status-form/status-form.component';
import { StatusListComponent } from './admin/status/status-list/status-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'admin/category', component: CategoryListComponent },
  { path: 'admin/category/form', component: CategoryFormComponent },
  { path: 'admin/status', component: StatusListComponent },
  { path: 'admin/status/form', component: StatusFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
