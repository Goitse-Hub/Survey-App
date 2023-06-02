import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SurveyService } from 'src/app/_services/survey.service';
import { NewSurvey } from './create_survey';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-createSurvey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})

export class CreateSurveyComponent implements OnInit {

  surveyForm: FormGroup;
  questionGroups!: FormArray; // Add the questionGroups property
  survey: any;

  constructor(private formBuilder: FormBuilder, private surveyService: SurveyService) {
    this.surveyForm = this.formBuilder.group({
      title: '',
      questions: this.formBuilder.array([]),
      description: ""
    });
  }

  ngOnInit(): void {
    this.questionGroups = this.getQuestionControls(); // Initialize questionGroups
  }
  getQuestionGroup(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  getQuestionControls(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  addQuestion(): void {
    const questionGroup = this.formBuilder.group({
      questionText: '',
      options: this.formBuilder.array([])
    });
    this.getQuestionControls().push(questionGroup);
    this.questionGroups = this.getQuestionControls(); // Update questionGroups
  }

  removeQuestion(index: number): void {
    this.getQuestionControls().removeAt(index);
    this.questionGroups = this.getQuestionControls(); // Update questionGroups
  }

  getOptionControls(questionGroup: FormGroup): FormArray {
    return questionGroup.get('options') as FormArray;
  }

  addOption(questionGroup: FormGroup): void {
    const optionGroup = this.formBuilder.group({
      choices: ''
    });
    this.getOptionControls(questionGroup).push(optionGroup);
  }

  removeOption(questionGroup: FormGroup, index: number): void {
    this.getOptionControls(questionGroup).removeAt(index);
  }


  onSubmit() {
    if (this.surveyForm.invalid) {
      return;
    }
    console.log(this.surveyForm.value)
    window.location.reload()
    // this.surveyService.createSurvey().subscribe(res => {
    //   this.survey = res;
      
    // })
    // .subscribe(
    //   response => {
    //     // Handle success response
    //     console.log('Survey created successfully!', response);
    //   },
    //   error => {
    //     // Handle error response
    //     console.error('Error creating survey:', error);
    //   }
    // );
  }
}