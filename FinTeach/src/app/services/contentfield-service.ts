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

  getAll(): Observable<ContentField[]> {
    return this.http.get<ContentField[]>(baseUrl);
  }

  
}