//This class defines the HTTP service for the Module Progress table in the DB
//Various queries are defined as well as API endpoints
//These are used by components in the src/app folder
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleProgress } from '../models/moduleprogress-model';
//Base url defined for the module progress table
const baseUrl = 'http://localhost:8080/api/moduleprogress';

@Injectable({
  providedIn: 'root'
})
export class ModuleProgressService {

  constructor(private http: HttpClient) { }
  //Goes to the API Endpoint for retrieving ALL module progress data
  getAll(): Observable<ModuleProgress[]> {
    return this.http.get<ModuleProgress[]>(baseUrl);
  }

  getFromId(module_id:any, user_id:any): Observable<ModuleProgress[]> {
    return this.http.get<ModuleProgress[]>(baseUrl+"/from_id/"+module_id+"/"+user_id);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(data: any):  Observable<any> {
    return this.http.post(baseUrl+"/update", data);
  }
}
