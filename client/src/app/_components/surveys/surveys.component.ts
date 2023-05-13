import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { SurveyService } from 'src/app/_services/survey.service';
// import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-board-user',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys:any;

  constructor(
    public fb: FormBuilder,
        public surveyService: SurveyService, private router:Router)
   {}

   ngOnInit(){
      this.onGetSurveys();
   }

  onTakeSurvey(title:any) {
    this.router.navigate(['survey/', title]);
  }

  onGetSurveys(): void {

    this.surveyService.getSurveys().subscribe({
      next: (data:any) => {
        this.surveys = data;
      },
      error: (err:any) => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
   });
  }
}