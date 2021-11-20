//This class defines the HTTP service for the Quiz table in the DB
//Various queries are defined as well as API endpoints
//These are used by components in the src/app folder
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz-model';

//Base URL endpoint defined for the quiz table
const baseUrl = 'http://localhost:8080/api/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // API request to database to get all quizes.
  getAll(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(baseUrl);
  }

  // API request to database to get quizs based on parent submodule id.
  getFromSubmoduleId(id:any): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(baseUrl+"/from_submodule_id/"+id);
  }

}
