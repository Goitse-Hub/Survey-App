import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/survey';
const URL = 'http://localhost:8080/api/surveytemplate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SurveyService {

  constructor(private http: HttpClient) { }

  getSurveys(): Observable<any> {
    return this.http.get(API_URL+'template/', { responseType: 'json' });
  }

  getByTitle(title:any): Observable<any> {
    return this.http.get(API_URL+'template/'+title, { responseType: 'json' });
  }

  saveSurvey(survey:any): Observable<any> {
    console.log(survey, 'on save');
    return this.http.post(API_URL, survey);
  }

  addSurvey(body: any){
    return this.http.post<any>(URL, body)
  }
  

}