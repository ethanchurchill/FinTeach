import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz-model';

const baseUrl = 'http://localhost:8080/api/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(baseUrl);
  }


}
