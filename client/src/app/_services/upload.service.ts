import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


constructor(private api:HttpClient) { 

}

uploadImage(vals: any) : Observable<any>{
  let data = vals;

  return this.api.post(
    'https://api.cloudinary.com/v1_1/dbdhrolar/image/upload',
    data
  )
}

}