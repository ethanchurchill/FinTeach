import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentField } from '../models/contentfield-model';

const baseUrl = 'http://localhost:8080/api/contentfield';

@Injectable({
  providedIn: 'root'
})
export class ContentFieldService {

  constructor(private http: HttpClient) { }

  // API request to database to get all content fields.
  getAll(): Observable<ContentField[]> {
    return this.http.get<ContentField[]>(baseUrl);
  }

  // API request to database to get content field based on parent submodule id.
  getFromSubmoduleId(id:any): Observable<ContentField[]> {
    return this.http.get<ContentField[]>(baseUrl+"/from_submodule_id/"+id);
  }

}
