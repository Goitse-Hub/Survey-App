import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SurveyService } from 'src/app/_services/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent {
  surveyService: any;
  addForm: any;
  router: any;
  msg!: string; 
Survey: any;

  constructor(
    public fb: FormBuilder,
        public SurveyService: SurveyService)
   {}

  onSubmit() {
    this.surveyService.save(this.addForm.value)
      .subscribe( (data: any) => {
        this.router.navigate(['list-user']);
        this.msg = 'Thank you for your feedback';
      });
  }
}
