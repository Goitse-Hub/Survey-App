import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './_components/home/home.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { LoginComponent } from './_components/login/login.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { RegisterComponent } from './_components/register/register.component';
import { SurveysComponent } from './_components/surveys/surveys.component';
import { TakesurveyComponent } from './_components/takesurvey/takesurvey.component';
import { ForgotPasswordComponent } from './_components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './_components/verify-email/verify-email.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'surveys', component: SurveysComponent },
  { path: 'survey/:title', component: TakesurveyComponent },
  {path: 'forgotPwd', component:ForgotPasswordComponent},
  {path: 'verifyEmail', component:VerifyEmailComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
