import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreatePostComponent } from './admin/post/create-post/create-post.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'show/:id', component: ShowComponent },
  // admin 
  { path: 'admin', component: AdminComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'create-post',
    component: CreatePostComponent
  },
  { path: 'create-category', component: CreateCategoryComponent },
  // auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
