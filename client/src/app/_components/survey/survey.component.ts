import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/_services/survey.service';

@Component({
  selector: 'app-surveys',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit{
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
    if(this.form.status === "INVALID"){
      debugger;
      alert("Please answer all questions!!!");
      return;
    } 

    this.form.value["templateid"] = this.surveyItem._id;
    
    const survey = this.form.value;
    const API_URL = 'http://localhost:8080/api/survey';

    const request = new XMLHttpRequest();
    request.open('POST', API_URL);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
      // Handle "load"
    });
    request.addEventListener('error', () => {
      // Handle "error"
    });
    request.send(JSON.stringify(survey.data));
    
    this.surveyService.saveSurvey(survey.data)
      .subscribe( (data: any) => {
       
       alert('Thank you for your feedback!!!');
       this.router.navigate(['surveys']);
      });
  }

  onCancel(){
    this.router.navigate(['home']);
  }
}
