import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseNavbarComponent } from './components/base-navbar/base-navbar.component';
import { BaseFooterComponent } from './components/base-footer/base-footer.component';
import { PostComponent } from './post/post.component';

// material 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { LimitToPipe } from './pipes/limit-to.pipe';
import { ShowComponent } from './show/show.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreatePostComponent } from './admin/post/create-post/create-post.component';
import { EditPostComponent } from './admin/post/edit-post/edit-post.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { EditCategoryComponent } from './admin/category/edit-category/edit-category.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FancyCardComponent } from './admin/components/fancy-card/fancy-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseNavbarComponent,
    BaseFooterComponent,
    PostComponent,
    LimitToPipe,
    ShowComponent,
    DashboardComponent,
    CreatePostComponent,
    EditPostComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    FancyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
