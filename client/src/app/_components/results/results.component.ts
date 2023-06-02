import { Component } from '@angular/core';
import { SurveyService } from 'src/app/_services/survey.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  surveys: any;
  constructor(private userSurvey: SurveyService){}
  
  ngOnInit(){
    this.onGetUsers();
 }

  onGetUsers(): void {

    this.userSurvey.getSurveyResults().subscribe({
      next: (data:any) => {
        this.surveys = data;
        this.surveys.id
        
      },
      error: (err:any) => {
       
      }
   });
}

}
