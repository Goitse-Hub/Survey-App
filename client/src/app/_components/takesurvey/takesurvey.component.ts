import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/_services/survey.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-takesurvey',
  templateUrl: './takesurvey.component.html',
  styleUrls: ['./takesurvey.component.css']
})
export class TakesurveyComponent {
  surveyModel: any;;
  addForm: any;
  msg!: string;
  title: any;
  surveyQuestions: any;
  form!: FormGroup;
  surveyItem:any;
  loaded: boolean= false;
  invalidSelection: boolean= false;
  //get isValid() { return this.form.controls[this.question.key].valid; }

  constructor(
    private fb: FormBuilder,
        public surveyService: SurveyService,
        private activatedRoute: ActivatedRoute,
        private router:Router)
   {
    this.form = new FormGroup({});
   }

   ngOnInit(): void { 
    this.activatedRoute.paramMap.subscribe((params) => {
      this.title = params.get('title');
      this.onGetSurvey(this.title);
    });
  }

  toFormGroup(questions: any ) : FormGroup{
    const group: any = {};

    questions.forEach((question:any) => {
      group[question.name] = new FormControl(question.value || '', Validators.required);
    });
    return new FormGroup(group);
  }

   onGetSurvey(title:any): void {

    this.surveyService.getByTitle(title).subscribe({
      next: (data) => {
       if(data.length > 0){
        data.forEach((item:any) => {
          
          if(item.title === title){
            this.surveyItem = item;
          }
          
        });
                
        this.surveyQuestions =JSON.parse(this.surveyItem.questions.replace(/'/gi,'"'));
        this.form.reset();
        this.form.setParent(this.toFormGroup(this.surveyQuestions))
        this.form = this.toFormGroup(this.surveyQuestions);
        this.loaded = true;
       }else{
          this.invalidSelection = true;
       }
      },
      error: (err) => {
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      }
   });
  }

  onSubmit() {
    if (this.form.status === "INVALID") {
      this.onInvalidFormAlert();
      return;
    }

    this.form.value["templateid"] = this.surveyItem.id;

    
    this.surveyService.saveSurvey(this.form.value)
      .subscribe((data: any) => {
        this.onSubmitSuccessAlert();
      })
  }

  onCancel() {
    this.router.navigate(['surveys']);
  }

  onSubmitSuccessAlert() {
    Swal.fire({
      title: 'Wonderful!',
      text: 'Thank you for your feedback!!!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.value) {
        this.router.navigate(["/surveys"])
      }
    })
  }

  onInvalidFormAlert() {
    Swal.fire({
      title: 'Failed!',
      text: 'Please Answer All Questions!!!',
      icon: 'error',
      confirmButtonText: 'OK',
    }).then((result) => {

    })

  }
}