//This class defines the HTTP service for the Modules table in the DB
//Various queries are defined as well as API endpoints
//These are used by components in the src/app folder
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Module } from '../models/module-model';
//Base API endpoint for the modules table
const baseUrl = 'http://localhost:8080/api/modules';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }
    // API request to database to get all modules.
  getAll(): Observable<Module[]> {
    return this.http.get<Module[]>(baseUrl);
  }

  
}