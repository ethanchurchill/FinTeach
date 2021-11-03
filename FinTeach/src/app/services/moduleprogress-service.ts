import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleProgress } from '../models/moduleprogress-model';

const baseUrl = 'http://localhost:8080/api/moduleprogress';

@Injectable({
  providedIn: 'root'
})
export class ModuleProgressService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ModuleProgress[]> {
    return this.http.get<ModuleProgress[]>(baseUrl);
  }

  
}