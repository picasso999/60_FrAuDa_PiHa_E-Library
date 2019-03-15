import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { PagerComponent } from './pager/pager.component';
import { BookComponent } from './book/book.component';
import { LibraryComponent } from './library/library.component';
import { BookInfoComponent } from './book-info/book-info.component';

import { GoogleBooksService } from './shared/google-books.service';
import { LibraryService } from './shared/library.service';
import { DomService } from './services/dom.service';
import { ModalService } from './services/modal.service';

import { AngularFireAuthModule } from '@angular/fire/auth';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// App routing modules
import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
// Auth service
import { AuthService } from './Auth_1/shared/services/auth.service';
// import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
// import { NgModule } from '@angular/core';
// Reactive Form
// import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BookListComponent,
    PagerComponent,
    BookComponent,
    LibraryComponent,
    BookInfoComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ClickOutsideModule
  ],
  entryComponents: [BookInfoComponent, BookListComponent],
  providers: [GoogleBooksService, AuthService, LibraryService, DomService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
