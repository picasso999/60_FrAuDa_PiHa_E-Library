import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { LibraryComponent } from './library/library.component';
import {AuthGuard} from './Auth_1/shared/guard/auth.guard';

// import { AuthGuard } from "../../shared/guard/auth.guard";
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
// import { NgModule } from '@angular/core';
import { SecureInnerPagesGuard } from "./Auth_1/shared/guard/secure-inner-pages.guard";
// Required components for which route services to be activated
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/search', pathMatch: 'full', canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent, canActivate: [AuthGuard]
  },
  {
    path: 'library',
    component: LibraryComponent, canActivate: [AuthGuard]
  },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
