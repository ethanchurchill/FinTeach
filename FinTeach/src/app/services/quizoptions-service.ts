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

  // API request to database to get all quiz options.
  getAll(): Observable<QuizOptions[]> {
    return this.http.get<QuizOptions[]>(baseUrl);
  }

  // API request to database to get quizoptions based on parent quiz id.
  getFromQuizId(id:any): Observable<QuizOptions[]> {
    return this.http.get<QuizOptions[]>(baseUrl+"/from_quiz_id/"+id);
  }

}
