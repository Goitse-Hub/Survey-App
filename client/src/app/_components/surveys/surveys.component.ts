import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SurveyService } from 'src/app/_services/survey.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

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

  constructor( public fb: FormBuilder, public SurveyService: SurveyService, public _router: Router)
   {}

  onSubmit() {
    this.surveyService.save(this.addForm.value)
      .subscribe( (data: any) => {
        this.router.navigate(['list-user']);
        this.msg = 'Thank you for your feedback';
      });
  }

  opensweetalert(){
    Swal.fire({
      title: 'Survey Submitted',
       text: 'thank you!',
      icon: 'success',
      confirmButtonText: 'Yes',
    }).then((result)=>{
      if (result.value){
        this._router.navigate(["/user"])
        
      }
      
    }
    )
    
   
      
      
    }
  }

  

