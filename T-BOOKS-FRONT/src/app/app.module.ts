import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelAuthorComponent } from './admin-panel-author/admin-panel-author.component';
import { AdminPanelBooksComponent } from './admin-panel-books/admin-panel-books.component';
import { AdminPanelEditorialComponent } from './admin-panel-editorial/admin-panel-editorial.component';
import { AdminPanelLoanComponent } from './admin-panel-loan/admin-panel-loan.component';
import { AdminPanelUsersComponent } from './admin-panel-users/admin-panel-users.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BookUploadComponent } from './book-upload/book-upload.component';
import { BooksComponent } from './books/books.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { InfoBookComponent } from './info-book/info-book.component';
import { LoginComponent } from './login/login.component';
import { PushBookComponent } from './push-book/push-book.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsPassComponent } from './settings-pass/settings-pass.component';
import { WriteCommentComponent } from './write-comment/write-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelAuthorComponent,
    AdminPanelBooksComponent,
    AdminPanelEditorialComponent,
    AdminPanelLoanComponent,
    AdminPanelUsersComponent,
    AdminPanelComponent,
    BookUploadComponent,
    BooksComponent,
    CommentsComponent,
    HomeComponent,
    InfoBookComponent,
    LoginComponent,
    PushBookComponent,
    RegisterComponent,
    SettingsComponent,
    SettingsPassComponent,
    WriteCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
