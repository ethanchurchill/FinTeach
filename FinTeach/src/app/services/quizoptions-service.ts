import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizOptions } from '../models/quizoptions-model';

const baseUrl = 'http://localhost:8080/api/quizoptions';

@Injectable({
  providedIn: 'root'
})
export class QuizOptionsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<QuizOptions[]> {
    return this.http.get<QuizOptions[]>(baseUrl);
  }


}
