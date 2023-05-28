import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { SurveysComponent } from './_components/surveys/surveys.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './_components/footer/footer.component';
import { TakesurveyComponent } from './_components/takesurvey/takesurvey.component';
import { RouterModule } from '@angular/router';
import { SurveyService } from './_services/survey.service';

//new
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UsersComponent } from './_components/users/users.component';
import { AdduserComponent } from './_components/adduser/adduser.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//Auth Guards
import { AuthGuard } from './auth/auth.guard'
import { AuthService } from './_services/auth.service';
import { UpdateuserComponent } from './_components/updateuser/updateuser.component';
import { CreateSurveyComponent } from './_components/create-survey/create-survey.component';
import { ForgotPasswordComponent } from './_components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './_components/reset-password/reset-password.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SurveysComponent,
    FooterComponent,
    TakesurveyComponent,
    UsersComponent,
    AdduserComponent,
    UpdateuserComponent,
    CreateSurveyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    //new,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [authInterceptorProviders, SurveyService, AuthGuard, AuthService, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
