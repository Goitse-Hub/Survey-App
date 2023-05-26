import { Component, ElementRef, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from 'src/app/_services/survey.service';
import { NewSurvey } from './create_survey';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-createSurvey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  isSubmitted = false;

  newSurvey: NewSurvey[] = [];
  files: File[] = [];

  types: any = ['radiogroup', 'comment',
            'rating', 'text'];
 
 minimun = 10;
//  form: FormGroup;

  form = this.fb.group({
    surveyTitle: ["", [Validators.required]],
   // questions: "[{'name': 'question1', 'titles': '', 'type': '', 'choices': [{'value': , 'text': ''}],}]",
    title: '',
    type: ['', [Validators.required]],
    choices: '',
    description:"",
    imageUrl:"",
    hashtags: "['']",

  });
  http: any;
  router: any;

  constructor(private create: SurveyService, private fb: FormBuilder, private uploadService: UploadService) {} 

  ngOnInit() {
  
    this.options;

   
}

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event: any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onUpload(){
  if(!this.files[0]){
    alert("Can't submit empty file");
  }

  //upload my image on cloudinary
  const file_data = this.files[0];
  const data = new FormData();
  data.append('imageUrl', file_data);
  data.append('ml_default','angular_cloudinary');
  data.append('dbdhrolar', 'Z5nCMDCFGf5PYUimMJHCzVGdtR4');

  this.uploadService.uploadImage(data).subscribe((response) => {
    console.log(response, "cloud");
});

}


changeOption(e: any) {
  console.log(e.value)
  this.form.setValue(e.target.value, {
    onlySelf: true
  })
}

submitForm() {
 
  let formData = this.form.value
  this.create.addSurvey(formData).subscribe(res=>{
    this.newSurvey = res;
    console.log(res)
  })
  
} 
 get options() {
  return this.form.get('type');
}

}
