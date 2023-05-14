import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SurveyService } from 'src/app/_services/survey.service';
import Swal from 'sweetalert2'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent {
  // surveyServ: any;
  // addForm: any;
  // router: any;
  // msg!: string; 
  // Survey: any;
  surveys:any;

  constructor( public fb: FormBuilder, public surveyService: SurveyService, public router: Router)
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

  // onSubmit() {
  //   this.surveyServ.save(this.addForm.value)
  //     .subscribe( (data: any) => {
  //       this.router.navigate(['list-user']);
  //       this.msg = 'Thank you for your feedback';
  //     });
  // }

  // opensweetalert(){
  //   Swal.fire({
  //     title: 'Survey Submitted',
  //      text: 'thank you!',
  //     icon: 'success',
  //     confirmButtonText: 'Yes',
  //   }).then((result)=>{
  //     if (result.value){
  //       this._router.navigate(["/user"])
        
  //     }
      
  //   }
  //   )
    
   
      
      
  //   }
  }

  
}
